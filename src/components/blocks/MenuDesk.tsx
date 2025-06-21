import { Group } from "@mantine/core";
import LinkNav from "../elements/LinkNav";
function MenuDesk() {
    return (
        <Group visibleFrom="md">
            <LinkNav txt="Blog" url="/blog" />
            <LinkNav txt="Sobre" url="/sobre" />
            <LinkNav txt="Contato" url="/contato" />
        </Group>
    );
}

export default MenuDesk;
