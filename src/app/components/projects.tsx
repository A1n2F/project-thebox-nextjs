import Image from "next/image";
import { GridContainer } from "./GridContainer";
import { ProjectCards } from "./projectCards";

import p1 from "../../../public/p1.png"
import p2 from "../../../public/p2.png"
import p3 from "../../../public/p3.png"
import p4 from "../../../public/p4.png"

import arrowLeft from "../../../public/arrowLeft.svg"
import arrowRight from "../../../public/arrowRight.svg"

export function Projects() {
    return (
        <div className="mt-24 mb-36">
            <GridContainer>
                <h1 className="text-4xl font-bold mb-10">Projects</h1>
                
                <div className="flex justify-between">
                    <div>
                        <div className="hidden lg:flex flex-col gap-5">
                            <span className="flex gap-4">
                                <span className="w-1 h-6 bg-primary"></span>
                                <a href="#" className="text-primary font-bold">All</a>
                            </span>
                            <a href="#">Commercial</a>
                            <a href="#">Residential</a>
                            <a href="#">Other</a>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[800px] flex flex-col pl-10 lg:grid grid-cols-2 gap-8">
                        <ProjectCards 
                            image={p1}
                            title="Wildstone Infra Hotel"
                            address="2715 Ash Dr. San Jose, South Dakota"
                        />

                        <ProjectCards 
                            image={p2}
                            title="Wish Stone Building"
                            address="2972 Westheimer Rd. Santa Ana, Illinois"
                        />

                        <ProjectCards 
                            image={p3}
                            title="Mr. Parkinston’s House"
                            address="3517 W. Gray St. Utica, Pennsylvania"
                        />

                        <ProjectCards 
                            image={p4}
                            title="Oregano Height"
                            address="2464 Royal Ln. Mesa, New Jersey "
                        />

                        <div className="hidden lg:flex items-center justify-between gap-10 w-[800px]">
                            <div>
                                <button className="flex items-center justify-center gap-2.5 w-[295px] h-[64] bg-gray-800 py-5 text-xl text-white
                                hover:scale-110 transition-all cursor-pointer">
                                    <Image 
                                        src={arrowLeft}
                                        alt=""
                                    />
                                    Back
                                </button>
                            </div>

                            <div className="flex gap-4 px-3">
                                <span className="flex w-4 h-4 bg-primary rounded-full"></span>
                                <span className="flex w-4 h-4 bg-gray-200 rounded-full"></span>
                                <span className="flex w-4 h-4 bg-gray-200 rounded-full"></span>
                                <span className="flex w-4 h-4 bg-gray-200 rounded-full"></span>
                            </div>

                            <div>
                                <button className="flex items-center justify-center gap-2.5 w-[290px] h-[64] bg-gray-800 py-5 text-xl text-white
                                hover:scale-110 transition-all cursor-pointer">
                                    <Image 
                                        src={arrowRight}
                                        alt=""
                                    />
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </GridContainer>
        </div>
    )
}