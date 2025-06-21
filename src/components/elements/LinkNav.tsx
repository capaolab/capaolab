import { Anchor } from "@mantine/core";
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
            // variant="subtle"
            className={classes.navLink}
        >
            <Image
                src="/svg/_[_abre.svg"
                className=""
                alt=""
                width="16"
                height="16"
            />
            <span className='px-2 capitalize font-medium text-lg hover:text-folha-50 hover:underline'>
                {txt}
            </span>
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
