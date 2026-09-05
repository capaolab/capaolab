'use client';

import React from 'react';
import { Box } from '@mantine/core';
import { useHomeSearch } from '@/providers/HomeSearchContext';
import Hero from './Hero';
import StatsBar from './StatsBar';
import Projetos from './Projetos';
import Frentes from './Frentes';
import QuemSomos from './QuemSomos';
import Parceiros from './Parceiros';
import SearchResults from './SearchResults';
import classes from './blocks.module.css';

function HomeExperience() {
    const { view, query, thinking, hit, runSearch, goHome, goToSection } = useHomeSearch();

    if (view === 'results') {
        return (
            <SearchResults
                query={query}
                thinking={thinking}
                hit={hit}
                onBack={goHome}
                onSubmit={runSearch}
                onSuggest={runSearch}
                onSourceClick={goToSection}
            />
        );
    }

    return (
        <>
            <Box className={classes.heroStatsWrap}>
                <Hero onSearch={runSearch} />
                <StatsBar />
            </Box>
            <Projetos />
            <Frentes />
            <QuemSomos />
            <Parceiros />
        </>
    );
}

export default HomeExperience;
