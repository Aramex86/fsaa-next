import { ProjectsOverview } from '@features/projects-overview';

/* app/projects/page.tsx — thin FSAA route (pages layer = App Router):
   import → render. No business logic, no columns, no data calls here. */

export default function ProjectsPage() {
  return <ProjectsOverview />;
}