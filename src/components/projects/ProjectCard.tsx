import { Link } from 'react-router-dom';
import { Star, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project, categoryInfo } from '@/data/projects';
import { CategoryBadge } from './CategoryBadge';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-card-hover ${featured ? 'md:flex' : ''}`}>
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/5' : 'aspect-video'}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <CardContent className={`p-4 ${featured ? 'md:flex-1 md:p-6' : ''}`}>
        <div className="space-y-3">
          {/* Category Badge */}
          <CategoryBadge category={project.category} />

          {/* Title */}
          <h3 className={`font-semibold line-clamp-1 ${featured ? 'text-xl' : 'text-lg'}`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-muted-foreground line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
            {project.shortDescription}
          </p>

          {/* Rating and Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{project.rating.toFixed(1)}</span>
            </div>
            {project.downloads && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="h-4 w-4" />
                <span className="text-sm">{(project.downloads / 1000).toFixed(0)}k</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-2">
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link to={`/project/${project.id}`}>
                View Details
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-1"
            >
              <a href={project.actionUrl} target="_blank" rel="noopener noreferrer">
                {project.actionType === 'use' ? (
                  <>
                    <ExternalLink className="h-3 w-3" />
                    Use
                  </>
                ) : (
                  <>
                    <Download className="h-3 w-3" />
                    Get
                  </>
                )}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
