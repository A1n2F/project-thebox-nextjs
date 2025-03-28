import Image from "next/image";
import { GridContainer } from "./GridContainer";

import logoImg from "../../../public/logothebox.png"
import theBoxImg from "../../../public/TheBox.png"

export function Header() {
    return (
        <header className="w-full h-20 flex items-center">
            <GridContainer className="flex items-center justify-between">
                <div className="mt-2 ml-2 flex lg:flex-row items-center gap-4">
                    <Image
                        src={logoImg}
                        alt="logo image"
                    />

                    <Image
                        src={theBoxImg}
                        alt="logo image"
                    />
                </div>

                <div className="hidden lg:flex items-center justify-between gap-12 max-w-[577px] text-lg">
                    <a href="#" className="hover:text-secondary transition-colors focus:text-secondary">Home</a>
                    <a href="#" className="hover:text-secondary transition-colors focus:text-secondary">About Us</a>
                    <a href="#" className="hover:text-secondary transition-colors focus:text-secondary">Projects</a>
                    <a href="#" className="hover:text-secondary transition-colors focus:text-secondary">Services</a>
                    <a href="#" className="hover:text-secondary transition-colors focus:text-secondary">Contact Us</a>
                </div>
            </GridContainer>
        </header>
    )
}