import Image from "next/image";

import kitchen from "../../../public/kitchen.png"

export function Consultation() {
    return (
        <div className="mt-10 relative">
                <Image
                    src={kitchen}
                    alt=""
                    className="w-max-[200px] w-full"
                />

                <div className="top-0 lg:top-40 lg:left-50 absolute flex items-center justify-between w-[1168px] ">
                    <div className="flex flex-col gap-8">
                        <h2 className="hidden lg:block text-4xl font-bold text-white">Free consultation with exceptional quality</h2>

                        <p className="text-xl font-medium text-gray-100">Just one call away: +84 1102 2703</p>
                    </div>

                    <div className="hidden lg:block absolute -right-40">
                        <button className="px-5 py-4 text-xl font-semibold text-white border border-white
                        hover:bg-white/20 transition-colors cursor-pointer">
                            Get your consultation
                        </button>
                    </div>
                </div>
        </div>
    )
}