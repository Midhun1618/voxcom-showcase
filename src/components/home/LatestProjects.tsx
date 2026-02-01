import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export const LatestProjects = () => {
  // Get latest 6 projects sorted by date
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 6);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Latest Projects</h2>
            <p className="mt-2 text-muted-foreground">
              Recently updated and newly added projects
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex gap-2">
            <Link to="/projects">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild className="gap-2">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
