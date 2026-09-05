'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { answerQuery, type SearchEntry } from '@/content/searchKb';

const THINKING_DELAY_MS = 900;

type View = 'home' | 'results';

interface HomeSearchContextValue {
    view: View;
    query: string;
    thinking: boolean;
    hit: SearchEntry | null;
    runSearch: (raw: string) => void;
    goHome: () => void;
    goToSection: (href: string) => void;
}

const HomeSearchContext = createContext<HomeSearchContextValue | null>(null);

/**
 * Owns the "ask in natural language" search state at the layout level
 * (instead of inside HomeExperience) so it survives outside the page that
 * renders the results: the header/footer anchor links and the pathname
 * watcher below all need to be able to drop a stale answer and jump back
 * to a real section, not just the page showing it.
 */
export function HomeSearchProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [view, setView] = useState<View>('home');
    const [query, setQuery] = useState('');
    const [thinking, setThinking] = useState(false);
    const [hit, setHit] = useState<SearchEntry | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Navigating to a different route (menu, footer, browser back/forward)
    // always drops any in-progress or shown answer. This is what makes the
    // header/footer's plain hash links work again once we leave `/`: by
    // the time the home page remounts, view is already back to 'home', so
    // the section exists for the browser's native hash scroll to find.
    // State reset is derived during render (React's documented pattern for
    // adjusting state on prop change) instead of an effect, since a
    // setState-on-mount effect here causes an extra cascading render pass.
    // The pending timer is a ref, so clearing it stays in its own effect.
    const [lastPathname, setLastPathname] = useState(pathname);
    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setThinking(false);
        setView('home');
    }

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
    }, [pathname]);

    useEffect(() => () => {
        if (timer.current) clearTimeout(timer.current);
    }, []);

    const runSearch = useCallback((raw: string) => {
        const text = raw.trim();
        if (!text) return;

        if (timer.current) clearTimeout(timer.current);
        setQuery(text);
        setView('results');
        setThinking(true);
        setHit(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        timer.current = setTimeout(() => {
            setThinking(false);
            setHit(answerQuery(text));
        }, THINKING_DELAY_MS);
    }, []);

    const goHome = useCallback(() => {
        if (timer.current) clearTimeout(timer.current);
        setThinking(false);
        setView('home');
    }, []);

    const goToSection = useCallback((href: string) => {
        if (timer.current) clearTimeout(timer.current);
        setThinking(false);
        setView('home');
        const id = href.replace('#', '');
        // Wait a tick for the home sections to (re)mount before scrolling.
        window.setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
    }, []);

    return (
        <HomeSearchContext.Provider value={{ view, query, thinking, hit, runSearch, goHome, goToSection }}>
            {children}
        </HomeSearchContext.Provider>
    );
}

export function useHomeSearch() {
    const ctx = useContext(HomeSearchContext);
    if (!ctx) {
        throw new Error('useHomeSearch must be used within a HomeSearchProvider');
    }
    return ctx;
}

/**
 * For any link that points at a same-page anchor on the home route
 * (header nav, footer índice, logo, search result sources): while the
 * search results view is showing, a plain <Link href="/#projetos"> does
 * nothing, because the target section isn't mounted. This clears the
 * results view and scrolls to the target instead. When we're not
 * currently on `/`, it's a no-op and the link navigates normally — the
 * pathname watcher above already guarantees the section will be there by
 * the time the home page lands.
 */
export function useSectionNavigate() {
    const pathname = usePathname();
    const { goToSection } = useHomeSearch();

    return useCallback((href: string, event: React.MouseEvent) => {
        const hashIndex = href.indexOf('#');
        if (hashIndex === -1) return;
        if (pathname !== '/') return;

        event.preventDefault();
        goToSection(href.slice(hashIndex));
    }, [pathname, goToSection]);
}
