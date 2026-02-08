import { Link } from 'react-router-dom';
import { ArrowRight, Package, FolderOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export const HeroSection = () => {
  const stats = [
    { icon: Package, label: 'Projects', value: projects.length },
    { icon: FolderOpen, label: 'Categories', value: 5 }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover Amazing
            <span className="block text-gradient">Digital Projects</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Explore a curated collection of innovative voice assistants, mobile apps, 
            desktop applications, and stunning websites. Built with passion and precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 px-8">
              <Link to="/projects">
                Browse Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/about">
                Know the Developer
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-xl bg-card p-4 shadow-soft"
            >
              <stat.icon className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold md:text-3xl">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
