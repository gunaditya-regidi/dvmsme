import { Metadata } from 'next';
import OnlineClassesContent from '../../components/OnlineClasses/OnlineClassesContent';

export const metadata: Metadata = {
  title: 'Online Classes & Tech Training | AISOFT',
  description: 'Join AISOFT in collaboration with VC Tech and Talent Computers. Practical tech training: Data Analytics and Full Stack Development (Python-Based).',
};

export default function OnlineClassesPage() {
  return <OnlineClassesContent />;
}
