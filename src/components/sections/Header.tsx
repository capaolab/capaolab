'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, Burger, Collapse, Container, Flex, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useDesignTokens } from '@/theme/tokens';
import { useSectionNavigate } from '@/providers/HomeSearchContext';
import classes from './sections.module.css';
import { base, page } from '@/content/infos'

interface NavLinkProps {
    label: string;
    link: string;
    external?: boolean;
    fz: number;
    onClick?: (event: React.MouseEvent) => void;
}

function NavLink({ label, link, external, fz, onClick }: NavLinkProps) {
    if (external) {
        return (
            <Text
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                fz={fz}
                className={classes.headerNavLink}
                style={{ letterSpacing: '0.06em' }}
            >
                {label}
            </Text>
        );
    }

    return (
        <Text
            component={Link}
            href={link}
            onClick={onClick}
            fz={fz}
            className={classes.headerNavLink}
            style={{ letterSpacing: '0.06em' }}
        >
            {label}
        </Text>
    );
}

function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const { paper, ink, muted, line, accent } = useDesignTokens();
    const isMobile = useMediaQuery('(max-width: 62em)');
    const barRef = useRef<HTMLDivElement>(null);
    const navigateSection = useSectionNavigate();

    // Publish the header bar's real height as a CSS var so the full-screen
    // hero (see blocks.module.css) can subtract exactly that much from
    // 100dvh instead of overshooting the viewport by the header's height.
    // Measured on the bar only, not the mobile Collapse below it, so
    // opening the mobile menu doesn't resize the hero underneath it.
    useEffect(() => {
        const el = barRef.current;
        if (!el) return;

        const publishHeight = () => {
            document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
        };
        publishHeight();

        const observer = new ResizeObserver(publishHeight);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Box
            component="header"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 110,
                backgroundColor: paper,
                borderBottom: `1px solid ${line}`,
            }}
        >
            <Container ref={barRef} size="xxl" w="100%" py={isMobile ? 14 : 20}>
                <Flex justify="space-between" align="center" gap={24}>
                    <Link
                        href="/#topo"
                        onClick={(e) => { navigateSection('/#topo', e); close(); }}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Flex align="baseline" gap={12}>
                            <Text
                                ff="var(--mantine-font-family-monospace)"
                                fz={14}
                                fw={500}
                                tt="uppercase"
                                style={{ letterSpacing: '0.14em', color: ink }}
                            >
                                {base.title}
                            </Text>
                            <Text
                                ff="var(--mantine-font-family-monospace)"
                                fz={11}
                                visibleFrom="sm"
                                style={{ letterSpacing: '0.08em', color: muted }}
                            >
                                {base.subtitle}
                            </Text>
                        </Flex>
                    </Link>

                    <Flex component="nav" visibleFrom="md" gap={28} ff="var(--mantine-font-family-monospace)" fz={12}>
                        {page.header.navLinksContent.map((item) => (
                            <NavLink
                                key={item.label}
                                label={item.label}
                                link={item.link}
                                external={item.external}
                                fz={12}
                                onClick={(e) => navigateSection(item.link, e)}
                            />
                        ))}
                    </Flex>

                    <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" color={accent} />
                </Flex>
            </Container>

            <Collapse expanded={opened} hiddenFrom="md">
                <Container size="xxl" w="100%" pb={20}>
                    <Flex direction="column" gap={16} ff="var(--mantine-font-family-monospace)" fz={13}>
                        {page.header.navLinksContent.map((item) => (
                            <NavLink
                                key={item.label}
                                label={item.label}
                                link={item.link}
                                external={item.external}
                                fz={13}
                                onClick={(e) => { navigateSection(item.link, e); close(); }}
                            />
                        ))}
                    </Flex>
                </Container>
            </Collapse>
        </Box>
    );
}

export default Header;
