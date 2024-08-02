import Image from "next/image";
function Partners({ image, name, width, height }) {
    return (
        <li className="w-28 h-28 p-4 rounded-3xl flex justify-center items-center shadow-md
            bg-black/10 backdrop-blur-xl
        ">
            <Image src={image} alt={name} width={width} height={height} />
        </li>
    );
}

export default Partners;