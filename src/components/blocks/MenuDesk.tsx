import { Anchor, Group } from "@mantine/core";
import { navLinksContent } from "@/content/navigation";
import classes from "./blocks.module.css";
function MenuDesk() {
    return (
        <Group
            visibleFrom="md"
            style={{
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
                    fz="xl"
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
