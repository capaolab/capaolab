import { Anchor, Text } from "@mantine/core";
import Image from "next/image";
import classes from "./elements.module.css";

interface LinkNavProps {
    txt: string;
    url: string;
}

function LinkNav({ txt, url }: LinkNavProps) {
    return (
        <Anchor
            href={url}
            c="inherit"
            className={classes.navLink}
        >
            <Image
                src="/svg/_[_abre.svg"
                className=""
                alt=""
                width="16"
                height="16"
            />
            <Text fz={{ sm: 'md', lg: 'lg' }}>
                {txt}
            </Text>
            <Image
                src="/svg/_[_fecha.svg"
                className=""
                alt=""
                width="16"
                height="16"
            />
        </Anchor>
    );
}

export default LinkNav;
