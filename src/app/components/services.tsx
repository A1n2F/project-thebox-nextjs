import { ServicesCard } from "./servicesCard";

import houseIcon from "../../../public/houseIcon.svg"
import archi from "../../../public/archi.svg"
import consulation from "../../../public/consulation.svg"
import eletric from "../../../public/eletric.svg"
import feature from "../../../public/feature.svg"
import repair from "../../../public/repair.svg"


export function Services() {
    return (
        <section className="w-full bg-gray-50 flex flex-col items-center">
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold mt-11">Services</h1>
            </div>

            <div className="flex flex-col lg:grid grid-cols-3 gap-24 max-w-[1008px] mt-9 mb-20">
                <ServicesCard 
                    image={houseIcon}
                    title="Construction"
                    variant="white"
                />

                <ServicesCard 
                    image={feature}
                    title="Renovation"
                    variant="blue"
                />

                <ServicesCard 
                    image={consulation}
                    title="Consultation"
                    variant="white"
                />

                <ServicesCard 
                    image={repair}
                    title="Repair Services"
                    variant="blue"
                />

                <ServicesCard 
                    image={archi}
                    title="Architecture"
                    variant="white"
                />

                <ServicesCard 
                    image={eletric}
                    title="Electric"
                    variant="blue"
                />
            </div>
        </section>
    )
}