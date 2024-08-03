import Image from "next/image";

function ShowServices({ name, icon, width, height, col }) {
    return (
        <div className={`flex flex-col justify-center items-center ${col}`}>
            <iconify-icon
                class="text-white"
                icon={`arcticons:${icon}`}
                width={width}
                height={height}
            >
            </iconify-icon>
            <p className="capitalize text-lg text-white font-mono">{name}</p>
        </div>
    );
}

export default ShowServices;