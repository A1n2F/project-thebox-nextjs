import Image from "next/image";

import heroImg from "../../../public/Hero.png"
import arrowLeftIcon from "../../../public/arrowLeft.svg"
import arrowRightIcon from "../../../public/arrowRight.svg"


export function SectionHero() {
    return (
        <section className="relative">
            <Image 
                src={heroImg}
                alt=""
                className="w-full max-h-[643px]"
            />
            
            <div className="hidden lg:block absolute left-64 top-60">
                <h1 className="text-7xl/snug font-bold max-w-[556px]">Building things is our mission.</h1>
            </div>

            <div className="hidden lg:block w-[496px] h-[150px] bg-primary absolute bottom-10 right-0">
                <div className="flex flex-col items-center justify-center gap-5 mt-5">
                    <h2 className="text-xl font-bold text-white">Feature Projects</h2>
                    <p className="text-2xl font-light text-white max-w-[321px] text-center">The National University of Architecture</p>
                </div>
            </div>
            <div className="hidden absolute right-0 bottom-0 lg:flex items-center">
                <div className="w-[248px] h-10 bg-[#292E3D] flex items-center justify-center gap-2.5 cursor-pointer">
                    <Image src={arrowLeftIcon} alt="" />
                    <p className="text-xl text-white hover:scale-120 transition-all">Back</p>
                </div>
                <div className="w-[248px] h-10 bg-[#292E3D] flex items-center justify-center gap-2.5 cursor-pointer">
                    <p className="text-xl text-white hover:scale-120 transition-all">Next</p>
                    <Image src={arrowRightIcon} alt="" />
                </div>
            </div>
        </section>
    )
}