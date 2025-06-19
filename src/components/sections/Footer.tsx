import React from 'react'
import { AppShell, Text } from '@mantine/core';

function Footer() {
    return (
        <AppShell.Footer
            withBorder={false}
            style={(theme) => ({
                backgroundColor: theme.colors.gray[9],
                color: theme.white,
                position: 'relative',
                zIndex: 0,
            })}
        >
            <Text size="sm">
                2023 © Capaolab - All rights reserved
            </Text>
        </AppShell.Footer>
    );
}

export default Footer;