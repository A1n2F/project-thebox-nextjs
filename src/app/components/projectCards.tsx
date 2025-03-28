import Image from "next/image";

interface ProjectCardsProps {
    image: HTMLImageElement
    title: string
    address: string
}

export function ProjectCards({ image, title, address }:ProjectCardsProps ) {
    return (
        <div className="w-[384px] h-[330px]">
            <Image
                src={image}
                alt=""
            />

            <div className="w-full bg-primary py-3 pl-3">
                <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
                <p className="text-white">{address}</p>
            </div>
        </div>
    )
}