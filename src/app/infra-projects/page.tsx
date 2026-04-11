import { Metadata } from 'next';
import ProjectsListing from '@/components/InfraProjects/ProjectsListing';
import { fetchProjects } from '@/utils/fetchProjects';

export const metadata: Metadata = {
  title: 'RAB INFO and INFRA Projects',
  description: 'Explore our latest infrastructure projects.',
};

export default async function InfraProjectsPage() {
  const projects = await fetchProjects();
  return <ProjectsListing initialProjects={projects} />;
}
