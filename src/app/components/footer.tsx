import Image from "next/image";
import { GridContainer } from "./GridContainer";

import logo from "../../../public/logothebox.png"
import thebox from "../../../public/TheBox.png"
import facebook from "../../../public/facebook.svg"
import inst from "../../../public/inst.svg"
import twitter from "../../../public/twitter.svg"

export function Footer() {
    return (
        <div className="mt-24">
            <GridContainer className="flex flex-col lg:flex-row justify-center lg:gap-[600px]">
                <div className="flex flex-col space-y-8 mb-20">
                    <span className="flex gap-3">
                        <p className="text-primary font-medium uppercase">Address:</p>
                        <p>6391 Elgin St. Celina, Delaware 10299</p>
                    </span>

                    <span className="flex gap-3">
                        <p className="text-primary font-medium uppercase">Phone:</p>
                        <p>+84 1102 2703</p>
                    </span>

                    <span className="flex gap-3">
                        <p className="text-primary font-medium uppercase">Email:</p>
                        <p>hello@thebox.com</p>
                    </span>

                    <span className="flex gap-3">
                        <Image 
                            src={logo}
                            alt=""
                        />

                        <Image 
                            src={thebox}
                            alt=""
                            className="w-30 h-8 mt-2"
                        />
                    </span>
                </div>

                <div className="mb-20">
                    <p className="text-primary font-medium uppercase">Newsletter:</p>

                    <div className="flex gap-2 mt-5">
                        <input 
                            type="text" 
                            placeholder="Your email here" 
                            className="w-[280px] h-10 border border-gray-300 rounded-lg pl-3"
                        />
                        
                        <button className="w-[136px] h-10 px-6 py-2.5 bg-secondary text-white font-semibold flex items-center justify-center
                        rounded-lg hover:bg-secondary/80 transition-colors cursor-pointer">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-primary font-medium uppercase mt-11">Social:</p>

                    <div className="flex gap-5 mt-5">
                        <Image 
                            src={facebook} 
                            alt="" 
                            className="hover:scale-110 transition-all cursor-pointer"
                        />
                        <Image 
                            src={inst} 
                            alt=""
                            className="hover:scale-110 transition-all cursor-pointer"
                        />
                        <Image 
                            src={twitter} 
                            alt="" 
                            className="hover:scale-110 transition-all cursor-pointer"
                        />
                    </div>
                </div>
            </GridContainer>

            <div className="w-md lg:w-full h-16 bg-primary flex items-center pl-60">
                <GridContainer>
                        <p className="text-gray-300">TheBox Company © 2022. All Rights Reserved</p>
                </GridContainer>
            </div>  
        </div>
    )
}