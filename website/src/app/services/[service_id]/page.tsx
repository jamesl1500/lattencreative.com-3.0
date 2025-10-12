import type { Metadata } from "next";
import { generateServiceMetadata } from "../../../libs/metadata";

// This would typically come from your CMS or API
interface ServicePageProps {
  params: {
    service_id: string;
  };
}

// Example function to get service data - replace with your actual data source
function getServiceData(serviceId: string) {
  const services = {
    'web-design': {
      name: 'Web Design',
      description: 'Professional web design services that create stunning, user-friendly websites tailored to your brand and business goals.',
      content: 'Our web design process focuses on creating visually appealing and functional websites...'
    },
    'web-development': {
      name: 'Web Development',
      description: 'Custom web development solutions using modern technologies to build fast, secure, and scalable websites.',
      content: 'We specialize in creating custom web applications using the latest technologies...'
    },
    'digital-marketing': {
      name: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online presence and drive business growth.',
      content: 'Our digital marketing services include SEO, social media marketing, and more...'
    }
  };

  return services[serviceId as keyof typeof services] || null;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceData(params.service_id);
  
  if (!service) {
    return generateServiceMetadata(
      'Service Not Found',
      'The requested service could not be found.',
      params.service_id
    );
  }

  return generateServiceMetadata(
    service.name,
    service.description,
    params.service_id
  );
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceData(params.service_id);

  if (!service) {
    return (
      <div className="page page-service">
        <div className="page-inner container-fluid">
          <h1>Service Not Found</h1>
          <p>The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-service">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
        </div>
        <div className="page-content">
          <div className="service-details">
            <p>{service.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}