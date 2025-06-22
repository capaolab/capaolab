import { Group } from "@mantine/core";
import LinkNav from "../elements/LinkNav";
import { navLinksContent } from "@/content/navigation";
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
            }}
        >
            {navLinksContent.map((link) => (
                <LinkNav key={link.label} label={link.label} link={link.link} />
            ))}
        </Group>
    );
}

export default MenuDesk;
