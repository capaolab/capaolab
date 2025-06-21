import { Group } from "@mantine/core";
import LinkNav from "../elements/LinkNav";
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
            <LinkNav txt="Blog" url="/blog" />
            <LinkNav txt="Sobre" url="/sobre" />
            <LinkNav txt="Contato" url="/contato" />
        </Group>
    );
}

export default MenuDesk;
