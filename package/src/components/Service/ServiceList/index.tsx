import Link from "next/link";
import { ServicesData } from "@/app/api/data";
import Image from "next/image";

const ServiceList = () => {
    return (
        <section className="lg:py-28 py-16 dark:bg-dark">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {ServicesData.map((item, index) => (
                        <Link href={`/services/${item.slug}`} key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                          <div className="bg-white group dark:bg-dark rounded-lg overflow-hidden h-[380px] flex flex-col cursor-pointer" data-aos="fade-up" data-aos-delay={`${(index) * 150}`}>
                                            <div className="overflow-hidden h-[180px]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={250}
                                                    height={250}
                                                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                                                />
                                            </div>
                                            <div className="px-6 pt-5 pb-4 shadow-service-shadow dark:shadow-darkmd flex-1 flex flex-col">
                                                <h4 className="text-base font-bold dark:text-white group-hover:text-primary mb-3 leading-tight">
                                                    {item.title}
                                                </h4>
                                                <p className="text-muted dark:text-white/60 text-sm line-clamp-3 leading-relaxed">
                                                    {item.text}
                                                </p>
                                                <div className="flex justify-end mt-auto pt-3">
                                                    <span className="text-primary group-hover:text-secondary transition-colors duration-300 text-sm font-medium">
                                                        Learn More →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceList;