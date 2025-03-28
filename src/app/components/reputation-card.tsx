import Image from "next/image"
import { ReactNode } from "react"

interface ReputationCardProps {
    image: HTMLImageElement
    title: string
    description: string
}

export function ReputationCard({ image, title, description }: ReputationCardProps) {
    return (
        <div className="w-full lg:w-[300px] h-[200px] border border-gray-300 rounded-xl">
            <div className="pt-5 pl-5">
                <Image src={image} alt="" className="mb-5" />

                <h2 className="text-xl font-semibold text-gray-700 mb-5">{title}</h2>

                <p className="text-gray-400 max-w-[260px]">{description}</p>
            </div>
        </div>
    )
}