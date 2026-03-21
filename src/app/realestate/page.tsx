import { Metadata } from 'next';
import RealEstateContent from '../../components/RealEstate/RealEstateContent';

export const metadata: Metadata = {
  title: 'Real Estate Ventures | VK Group Golden Offer',
  description: 'Premium Farm Land Opportunity by VK Group at Sandal Valley Farm Land, Ramabhadrapuram. Low entry, high value investment with free stay resort benefits.',
  keywords: 'Real Estate, VK Group, Farm Land, Sandal Valley, Property investment, Bobbili Road, Premium Land',
};

export default function RealEstatePage() {
  return (
    <>
      <RealEstateContent />
    </>
  );
}
