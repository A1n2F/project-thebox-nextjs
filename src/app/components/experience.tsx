import Image from "next/image";
import { GridContainer } from "./GridContainer";

import hands from "../../../public/hands.svg"
import paper from "../../../public/paper.svg"
import paper2 from "../../../public/paper2.svg"
import trofeu from "../../../public/trofeu.svg"

export function Experience() {
    return (
        <div className="pt-32 pl-32 pb-16">
            <GridContainer className="flex justify-center gap-90 mb-16">
                <div className="hidden lg:flex items-center justify-between w-full max-w-[475px] relative right-20">
                    <div className="mx-auto">
                        <div className="w-[280px] h-[150px] bg-white shadow absolute left-90 top-0 z-10">
                            <Image
                                src={hands}
                                alt=""
                                className="absolute -right-5 -top-10"
                            />
                            <h1 className="pt-8 pl-8 text-7xl font-bold text-gray-900">84</h1>
                            <div className="flex gap-3 mt-2 pl-8">
                                <span className="w-2 h-7 bg-secondary"></span>
                                <p className="text-xl font-light text-gray-500">Happy Clients</p>
                            </div>
                        </div>

                        <div className="w-[360px] h-[150px] bg-white shadow absolute top-25 left-10">
                            <Image
                                src={paper}
                                alt=""
                                className="absolute -left-10 -top-15"
                            />
                            <h1 className="pt-8 pl-8 text-7xl font-bold text-gray-900">123</h1>
                            <div className="flex gap-3 mt-2 pl-8">
                                <span className="w-2 h-7 bg-secondary"></span>
                                <p className="text-xl font-light text-gray-500">Projects Completed</p>
                            </div>
                        </div>

                        <div className="w-[280px] h-[150px] bg-white shadow absolute top-55 -right-40 z-10">
                            <Image
                                src={trofeu}
                                alt=""
                                className="absolute -right-10 top-0"
                            />
                            <h1 className="pt-8 pl-8 text-7xl font-bold text-gray-900">37</h1>
                            <div className="flex gap-3 mt-2 pl-8">
                                <span className="w-2 h-7 bg-secondary"></span>
                                <p className="text-xl font-light text-gray-500">Awards Win</p>
                            </div>
                        </div>

                        <div className="w-[360px] h-[150px] bg-white shadow absolute top-80 right-25">
                            <Image
                                src={paper2}
                                alt=""
                                className="absolute -right-10 -bottom-5"
                            />
                            <h1 className="pt-8 pl-8 text-7xl font-bold text-gray-900">30</h1>
                            <div className="flex gap-3 mt-2 pl-8">
                                <span className="w-2 h-7 bg-secondary"></span>
                                <p className="text-xl font-light text-gray-500">Years in Business</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col max-w-[360px] ">
                        <h1 className="text-6xl font-bold text-primary mb-10">30 Years Experience</h1>

                        <p className="text-xl font-medium text-gray-500 max-w-[330px]">
                            Our company has been the leading provided construction services to clients throughout the USA since 1988.
                        </p>

                        <button className="w-[176px] h-[53px] px-10 py-4 bg-primary text-white mt-16
                        hover:bg-primary/80 transition-colors cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </GridContainer>
        </div>
    )
}