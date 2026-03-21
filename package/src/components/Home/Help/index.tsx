import { helpdata } from "@/app/api/data";
import Image from 'next/image';

const Help = () => {
    return (
        <section className="lg:py-10 py-16 bg-white dark:bg-dark">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="text-center">
                    <h2 className="text-3xl mb-3 font-medium" data-aos-delay={'100'} data-aos="fade-right">
                        How can we help you?
                    </h2>
                    <p className="text-muted dark:text-white/60 text-base">
                    We deliver comprehensive digital solutions from concept to execution,<br className="lg:block hidden" /> combining technical expertise with creative innovation.
                    </p>
                    <div className="mt-20 grid grid-cols-12 gap-8">
                        {helpdata.map((item, index) => (
                            <div key={index} className="md:col-span-4 sm:col-span-6 col-span-12 text-center flex flex-col gap-5 justify-center" data-aos="fade-up" data-aos-delay={`${index * 150}`}>
                                <div className="flex justify-center">
                                    <Image
                                        src={item.icon}
                                        alt="icon"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="w-full max-w-xs mx-auto bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 ease-in-out cursor-pointer">
    <h4 className="text-lg font-medium text-blue-900 dark:text-blue-200 mb-3">
        {item.title}
    </h4>
    <ul className="list-disc list-inside text-blue-800 dark:text-blue-100 text-sm space-y-2 text-left">
        {(Array.isArray(item.text) ? item.text : String(item.text || '')
            .split(/\r?\n|;|\*|-|\. /)
            .map(s => s.trim())
            .filter(Boolean)
        ).map((point, i) => (
            <li key={i}>{point}</li>
        ))}
    </ul>
</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Help;