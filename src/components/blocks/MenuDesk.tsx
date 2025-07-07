import { Anchor, Group } from "@mantine/core";
import { navLinksContent } from "@/content/navigation";
import { navLink } from "@/theme/typoghaphy";

import classes from "./blocks.module.css";
function MenuDesk() {
    return (
        <Group
            component={"nav"}
            visibleFrom="lg"
            style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyItems: 'center',
                justifyContent: 'end',
                paddingRight: 20
            }}
        >
            {navLinksContent.map((link) => (
                <Anchor
                    key={link.label}
                    href={link.link}
                    fw="400"
                    fz={navLink.fontSize}
                    c={"inherit"}
                    className={classes.navLink}
                >
                    {link.label}
                </Anchor>
            ))}
        </Group>
    );
}

export default MenuDesk;
