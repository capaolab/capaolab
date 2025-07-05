import { Anchor, Text } from "@mantine/core";
import classes from "./elements.module.css";

interface LinkNavProps {
    label: string;
    link: string;
}

function LinkNav({ label, link }: LinkNavProps) {
    return (
        <Anchor
            href={link}
            c="inherit"
            className={classes.navLink}
        >
            <Text fz={{ sm: 'md', lg: 'lg' }}>
                {label}
            </Text>
        </Anchor>
    );
}

export default LinkNav;
