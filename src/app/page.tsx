
'use client';
import React from 'react';

import { Title, AppShell, Burger, useMantineTheme, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Home() {
  const [opened, { toggle }] = useDisclosure(true);
  const theme = useMantineTheme();

  return (
    <AppShell
      h={'100vh'}
      transitionDuration={500}
      transitionTimingFunction="ease"
      padding="md"
      style={(theme) => ({
        backgroundColor: theme.colors.terracota[8],
      })}
      header={{
        height: { base: 60, sm: 60, mg: 60 }
      }}
      navbar={{
        width: { sm: 200, lg: 300 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: true },
      }}
      footer={{
        height: { base: 60, sm: 60, mg: 60 },
      }}
    >
      <AppShell.Header
        p="md"
        withBorder={false}
        style={(theme) => ({
          backgroundColor: theme.colors.terracota[8],
          color: theme.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // boxShadow: theme.shadows.sm,
          zIndex: 1000,
        })}
      >
        Navbar
        <Burger
          opened={opened}
          variant="outline"
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color={theme.colors.blue[1]}
        />
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        style={
          (theme) => ({
            backgroundColor: theme.colors.terracota[4],
            color: theme.white,
            boxShadow: theme.shadows.sm,
          })
        }
      >
        Navbar
      </AppShell.Navbar>
      <AppShell.Main
        p="md"
        style={(theme) => ({
          // backgroundColor: theme.colors.terracota[2],
          color: theme.white,
          boxShadow: theme.shadows.sm,
          paddingTop: 60,
        })}
      >
        <Title order={1}>Capão Lab</Title>
      </AppShell.Main>
      <AppShell.Footer
        p="md"
        style={(theme) => ({
          backgroundColor: theme.colors.gray[9],
          color: theme.white,
        })}
      >
        <Text size="sm">
          2023 © Capaolab - All rights reserved
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
