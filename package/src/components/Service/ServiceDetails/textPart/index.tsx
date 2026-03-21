

interface TextPartProps {
    title: string;
    description: string;
}

const TextPart: React.FC<TextPartProps> = ({ title, description }) => {
    return (
        <>
            <div className="mt-16">
                <div className="mb-10">
                    <h2 className="text-3xl font-medium mb-3">
                        About Our {title}
                    </h2>
                    <p className="text-base text-muted dark:text-white/60">
                        {description}
                    </p>
                </div>
                <div className="mb-10">
                    <h2 className="text-3xl font-medium mb-3">
                        Service Features & Benefits
                    </h2>
                    <p className="text-base text-muted dark:text-white/60">
                        Our {title.toLowerCase()} service provides comprehensive solutions tailored to your specific needs. We utilize cutting-edge technologies and industry best practices to deliver exceptional results that drive your business forward. Our team of experts ensures seamless implementation and ongoing support.
                    </p>
                </div>
                <div className="mb-10">
                    <h2 className="text-3xl font-medium mb-3">
                        Implementation Process
                    </h2>
                    <p className="text-base text-muted dark:text-white/60">
                        We follow a structured approach to ensure successful delivery of our services. Starting with thorough analysis and planning, through development and implementation, to testing and optimization. Each phase is carefully managed to meet your requirements and exceed expectations.
                    </p>
                </div>
                <div className="mb-10">
                    <h2 className="text-3xl font-medium mb-3">
                        Quality Assurance & Support
                    </h2>
                    <p className="text-base text-muted dark:text-white/60">
                        Quality is at the core of everything we do. Our rigorous quality assurance processes ensure that every deliverable meets the highest standards. We provide comprehensive support throughout the project lifecycle and beyond, ensuring your continued success.
                    </p>
                </div>
                <div className="mb-10">
                    <h2 className="text-3xl font-medium mb-3">
                        Get Started Today
                    </h2>
                    <p className="text-base text-muted dark:text-white/60">
                        Ready to transform your business with our {title.toLowerCase()} services? Contact us today to discuss your requirements and discover how we can help you achieve your goals. Our team is ready to provide you with a customized solution that fits your budget and timeline.
                    </p>
                </div>
            </div>
        </>
    )
}
export default TextPart;