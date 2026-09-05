import { useMantineTheme } from '@mantine/core';

export interface DesignTokens {
    accent: string;
    accentDark: string;
    paper: string;
    ink: string;
    muted: string;
    line: string;
}

/**
 * Shared neutrals + accent for the flat, hairline-bordered editorial layout.
 * Keeps every block pulling colors from the same place instead of
 * re-destructuring theme.colors/theme.other everywhere.
 */
export function useDesignTokens(): DesignTokens {
    const theme = useMantineTheme();
    const other = theme.other as { paper: string; ink: string; muted: string; line: string };

    return {
        accent: theme.colors.terracota[7],
        accentDark: theme.colors.terracota[8],
        paper: other.paper,
        ink: other.ink,
        muted: other.muted,
        line: other.line,
    };
}
