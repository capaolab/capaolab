'use client';

import React, { createContext } from 'react';
import { useDisclosure } from '@mantine/hooks';

interface IToggleNaveBar {
    opened: boolean;
    toggle: () => void;
}

export const ToggleNavBarContext = createContext<IToggleNaveBar>({
    opened: false,
    toggle: () => { },
});

function ToggleNavBarProvider({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <ToggleNavBarContext.Provider
            value={{
                opened,
                toggle,
            }}
        >
            {children}
        </ToggleNavBarContext.Provider>
    );
}

export default ToggleNavBarProvider;
