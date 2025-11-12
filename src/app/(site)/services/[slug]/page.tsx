import { notFound } from "next/navigation";
import { ServicesData } from "@/app/api/data";
import ServiceDetailsContent from "@/components/Service/ServiceDetails/ServiceDetailsContent";

export function generateStaticParams() {
    return ServicesData.map((service) => ({
        slug: service.slug,
    }));
}

type ServiceDetailsPageProps = {
    params: {
        slug: string;
    };
};

const ServiceDetailsPage = ({ params }: ServiceDetailsPageProps) => {
    const item = ServicesData.find(
        (service) => service.slug.toLowerCase() === params.slug.toLowerCase()
    );

    if (!item) {
        notFound();
    }

    return <ServiceDetailsContent item={item} />;
};

export default ServiceDetailsPage;
