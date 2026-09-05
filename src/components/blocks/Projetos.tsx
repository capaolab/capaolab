import React from 'react';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import { projetosContent } from '@/content/cards';
import { useDesignTokens } from '@/theme/tokens';
import classes from './blocks.module.css';

function Projetos() {
    const { muted, line, accent, ink } = useDesignTokens();

    return (
        <Box id="projetos" component="section">
            <Container size="xxl" w="100%" py={{ base: 56, md: 80 }}>
                <Flex
                    justify="space-between"
                    align="baseline"
                    wrap="wrap"
                    gap={8}
                    pb={14}
                    mb={0}
                    style={{ borderBottom: `1px solid ${ink}` }}
                >
                    <Title
                        order={2}
                        ff="var(--mantine-font-family-monospace)"
                        fz={12}
                        tt="uppercase"
                        fw={500}
                        style={{ letterSpacing: '0.14em' }}
                    >
                        Projetos associados
                    </Title>
                    <Text ff="var(--mantine-font-family-monospace)" fz={12} style={{ color: muted }}>
                        ordem cronológica · {String(projetosContent.length).padStart(2, '0')} registros
                    </Text>
                </Flex>

                {projetosContent.map((project) => (
                    <Box key={project.id} className={classes.projectRow} style={{ borderBottom: `1px solid ${line}` }}>
                        <Flex
                            gap={{ base: 12, md: 32 }}
                            align="start"
                            py={30}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Text ff="var(--mantine-font-family-monospace)" fz={13} style={{ color: muted, minWidth: 60 }}>
                                {project.year}
                            </Text>
                            <Title order={3} fz={{ base: 22, md: 30 }} fw={500} style={{ letterSpacing: '-0.02em', flex: '1 1 260px' }}>
                                {project.title}
                            </Title>
                            <Text fz={15} style={{ color: muted, lineHeight: 1.5, flex: '2 1 340px' }}>
                                {project.description}
                            </Text>
                            <Text
                                ff="var(--mantine-font-family-monospace)"
                                fz={11}
                                tt="uppercase"
                                style={{ letterSpacing: '0.1em', color: accent, whiteSpace: 'nowrap' }}
                            >
                                {project.status}
                            </Text>
                        </Flex>
                    </Box>
                ))}
            </Container>
        </Box>
    );
}

export default Projetos;
