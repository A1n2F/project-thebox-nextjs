export function Contact() {
    return (
        <div className="w-full bg-gray-50">
            <div>
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-4xl font-bold mt-16">What can us do for you?</h1>
                    <p className="max-w-[560px] text-center mt-5 mb-10">
                        We are ready to work on a project of any complexity, whether it’s commercial or residential.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col lg:grid grid-cols-2 gap-5">
                        <input 
                            type="text" 
                            placeholder="Your name"
                            className="w-[280px] h-10 bg-white py-2.5 pl-3 border border-gray-200 rounded-lg" 
                        />

                        <input 
                            type="text" 
                            placeholder="Email"
                            className="w-[280px] h-10 bg-white py-2.5 pl-3 border border-gray-200 rounded-lg" 
                        />

                        <input 
                            type="text" 
                            placeholder="Reason for Contacting"
                            className="w-[280px] h-10 bg-white py-2.5 pl-3 border border-gray-200 rounded-lg" 
                        />

                        <input 
                            type="text" 
                            placeholder="Phone"
                            className="w-[280px] h-10 bg-white py-2.5 pl-3 border border-gray-200 rounded-lg" 
                        />
                    </div>

                    <div className="mt-5">
                        <input 
                            type="text" 
                            placeholder="Message"
                            className="w-[400px] lg:w-[580px] h-[135px] bg-white pb-20 pl-3 border border-gray-200 rounded-lg" 
                        />
                    </div>

                    <div className="mt-2 ml-10 lg:mr-95">
                        <p className="text-gray-400"><span className="text-red-500">*</span> indicates a required field</p>
                    </div>

                    <div className="mt-8 mb-16">
                        <button className="w-[270px] h-[54px] flex items-center justify-center py-4 px-24 bg-primary text-lg font-bold text-white
                         rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}