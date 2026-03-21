import HeroSub from "@/components/SharedComponent/HeroSub";
import ServiceList from "@/components/Service/ServiceList";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Our Services | Digital Videos MSME",
};

const Page = () => {
    return (
        <>
            <HeroSub
                title="Our Services"
            />
            <ServiceList />
            <Volunteer />
        </>
    )
}

export default Page;