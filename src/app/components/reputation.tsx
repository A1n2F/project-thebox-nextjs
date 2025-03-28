import { ReputationCard } from "./reputation-card";

import userPhone from "../../../public/userphone.svg"
import tools from "../../../public/tools.svg"

export function Reputation() {
    return (
        <section>
            <div className="mt-16 flex items-center justify-center">
                <h2 className="text-4xl font-bold">Our Reputation</h2>
            </div>

            <div className="flex-row lg:flex items-center justify-between max-w-[1020px] mx-auto mt-14 space-y-5 lg:space-y-0 px-4 lg:px-0">
                <ReputationCard
                    image={userPhone}
                    title="Best Services"
                    description="Nullam senectus porttitor in eget. Eget rutrum leo interdum."
                />

                <ReputationCard
                    image={userPhone}
                    title="Best Teams"
                    description="Cursus semper tellus volutpat aliquet lacus. "
                />

                <ReputationCard
                    image={tools}
                    title="Best Designs"
                    description="Ultricies at ipsum nunc, tristique nam lectus."
                />
            </div>
        </section>
    )
}