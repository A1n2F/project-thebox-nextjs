import Image from "next/image";

interface ServicesCardProps {
    image: HTMLImageElement
    title: string
    variant: "white" | "blue"
}

export function ServicesCard({ image, title, variant }: ServicesCardProps) {
    return (
        <div className="w-[280px] h-[180px] flex flex-col items-center justify-center space-y-5">
            {variant === "white" ? (
                <div className="w-[280px] h-[180px] bg-white flex flex-col items-center justify-center space-y-5">
                    <Image src={image} alt="" />

                    <span className="border-1 border-gray-400 w-10"></span>

                    <h2 className="text-xl text-primary font-semibold">{title}</h2>
                </div>
            ) : (
                <div className="w-[280px] h-[180px] bg-primary flex flex-col items-center justify-center space-y-5">
                    <Image src={image} alt="" />

                    <span className="border-1 border-gray-400 w-10"></span>

                    <h2 className="text-xl text-white font-semibold">{title}</h2>
                </div>
            )}
        </div>
    )
}