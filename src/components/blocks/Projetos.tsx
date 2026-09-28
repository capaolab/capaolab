'use client';

import React, { useState } from 'react';
import { Box, Collapse, Container, Flex, Text, Title } from '@mantine/core';
import { projetosContent } from '@/content/cards';
import { useDesignTokens } from '@/theme/tokens';
import ContourField from '@/components/elements/ContourField';
import SectionHeading from '@/components/elements/SectionHeading';
import classes from './blocks.module.css';

const COVER_ORIGIN: [number, number] = [0.5, 0.55];

function Projetos() {
    const { muted, line, accent, ink } = useDesignTokens();
    // Desktop panel always shows a project; the mobile accordion can be
    // fully collapsed (-1). Both layouts are mounted (CSS hides one), so
    // they need separate state or collapsing on mobile breaks the panel.
    const [active, setActive] = useState(0);
    const [expanded, setExpanded] = useState(0);
    const project = projetosContent[active];
    const total = String(projetosContent.length).padStart(2, '0');

    return (
        <Box id="projetos" component="section" className={`${classes.anchorSection} ${classes.projectsSection}`}>
            <Container size="xxl" w="100%" py={{ base: 56, md: 56 }} className={classes.projectsInner}>
                <SectionHeading index="01" title="Projetos" meta={`ordem cronológica · ${total} registros`} />

                {/* Desktop: index list + detail panel, filling the screen. */}
                <Box visibleFrom="lg" className={classes.projectsGrid}>
                    <Box component="ul" className={classes.projectList}>
                        {projetosContent.map((item, index) => (
                            <Box component="li" key={item.id}>
                                <Box
                                    component="button"
                                    type="button"
                                    className={classes.projectItem}
                                    data-active={index === active || undefined}
                                    aria-pressed={index === active}
                                    onMouseEnter={() => setActive(index)}
                                    onFocus={() => setActive(index)}
                                    onClick={() => setActive(index)}
                                >
                                    <Text component="span" ff="var(--mantine-font-family-monospace)" fz={14} className={classes.projectYear}>
                                        {item.year}
                                    </Text>
                                    <Text component="span" fz={{ lg: 26, xl: 30 }} fw={500} className={classes.projectTitle}>
                                        {item.title}
                                    </Text>
                                    <Text component="span" ff="var(--mantine-font-family-monospace)" fz={18} className={classes.projectArrow}>
                                        →
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box className={classes.projectPanel} style={{ border: `1px solid ${ink}` }}>
                        <Box className={classes.projectCover} style={{ borderBottom: `1px solid ${line}` }}>
                            <ContourField
                                seed={active + 1}
                                origin={COVER_ORIGIN}
                                step={0.11}
                                lineColor="rgba(22, 18, 15, 0.2)"
                                accentColor={accent}
                            />
                            <Text
                                ff="var(--mantine-font-family-monospace)"
                                fz={13}
                                className={classes.projectCoverIndex}
                                style={{ color: muted }}
                            >
                                {String(active + 1).padStart(2, '0')} / {total}
                            </Text>
                        </Box>
                        <Box p={{ lg: 32, xl: 40 }}>
                            <Flex justify="space-between" align="baseline" mb={14}>
                                <Text ff="var(--mantine-font-family-monospace)" fz={14} style={{ color: muted }}>
                                    {project.year}
                                </Text>
                                <StatusTag status={project.status} />
                            </Flex>
                            <Title order={3} fz={{ lg: 36, xl: 44 }} fw={500} lh={1.05} mb={14} style={{ letterSpacing: '-0.025em' }}>
                                {project.title}
                            </Title>
                            <Text fz={19} maw={620} style={{ color: muted, lineHeight: 1.55 }}>
                                {project.description}
                            </Text>
                        </Box>
                    </Box>
                </Box>

                {/* Mobile/tablet: compact rows, tap to expand. */}
                <Box hiddenFrom="lg">
                    {projetosContent.map((item, index) => {
                        const open = index === expanded;
                        return (
                            <Box key={item.id} style={{ borderBottom: `1px solid ${line}` }}>
                                <Box
                                    component="button"
                                    type="button"
                                    className={classes.projectRowButton}
                                    aria-expanded={open}
                                    onClick={() => setExpanded(open ? -1 : index)}
                                >
                                    <Flex justify="space-between" align="baseline" mb={6}>
                                        <Text component="span" ff="var(--mantine-font-family-monospace)" fz={13} style={{ color: muted }}>
                                            {item.year}
                                        </Text>
                                        <StatusTag status={item.status} />
                                    </Flex>
                                    <Flex justify="space-between" align="center" gap={16}>
                                        <Text component="span" fz={22} fw={500} lh={1.2} style={{ letterSpacing: '-0.015em' }}>
                                            {item.title}
                                        </Text>
                                        <Text
                                            component="span"
                                            ff="var(--mantine-font-family-monospace)"
                                            fz={20}
                                            style={{ color: accent, transition: 'transform 150ms ease', transform: open ? 'rotate(45deg)' : 'none' }}
                                        >
                                            +
                                        </Text>
                                    </Flex>
                                </Box>
                                <Collapse expanded={open}>
                                    <Text fz={17} pb={20} pr={32} style={{ color: muted, lineHeight: 1.55 }}>
                                        {item.description}
                                    </Text>
                                </Collapse>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}

function StatusTag({ status }: { status: string }) {
    const { accent } = useDesignTokens();
    return (
        <Text
            component="span"
            ff="var(--mantine-font-family-monospace)"
            fz={12}
            tt="uppercase"
            style={{ letterSpacing: '0.12em', color: accent, whiteSpace: 'nowrap' }}
        >
            ● {status}
        </Text>
    );
}

export default Projetos;
