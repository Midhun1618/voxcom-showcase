import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredProjects = getFeaturedProjects();

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  }, [featuredProjects.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  }, [featuredProjects.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const handleManualNav = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    direction === 'prev' ? prev() : next();
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-muted-foreground">Our best and most popular creations</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNav('prev')}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNav('next')}
              aria-label="Next project"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredProjects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 px-1">
                <ProjectCard project={project} featured />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
