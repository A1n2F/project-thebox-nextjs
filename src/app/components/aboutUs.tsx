import Image from "next/image";
import { GridContainer } from "./GridContainer";

import ownerImg from "../../../public/owner.png"

export function AboutUs() {
    return (
        <section className="w-full h-screen">
            <GridContainer className="relative">
                <Image 
                    src={ownerImg}
                    alt=""
                    className="hidden lg:block mt-40 absolute left-50"
                />

                <div className="w-full lg:w-[488px] h-[523px] bg-primary absolute top-60 right-0 lg:right-60">
                    <div className="pt-12 pl-10">
                        <h2 className="text-4xl font-bold text-white mb-10">About us</h2>

                        <p className="text-xl font-extralight text-white max-w-[388px] text-left mb-5">
                            For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships 
                            along the way.
                        </p>

                        <p className="text-xl font-extralight text-white max-w-[388px] text-left">
                            We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and 
                            reliability when building in the U.S.
                        </p>

                        <button className="px-5 py-3 bg-white text-primary font-semibold rounded-xl mt-16
                        hover:bg-white/70 transition-colors cursor-pointer">
                            More on Our History
                        </button>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}