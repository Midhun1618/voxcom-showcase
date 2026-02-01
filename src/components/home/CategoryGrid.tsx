import { Link } from 'react-router-dom';
import { Mic, Smartphone, Terminal, Coffee, Globe, LucideIcon } from 'lucide-react';
import { ProjectCategory, categoryInfo, getProjectsByCategory } from '@/data/projects';

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Smartphone,
  Terminal,
  Coffee,
  Globe,
};

export const CategoryGrid = () => {
  const categories = Object.entries(categoryInfo) as [ProjectCategory, typeof categoryInfo[ProjectCategory]][];

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Browse by Category</h2>
          <p className="mt-2 text-muted-foreground">
            Find projects across different technologies and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(([key, info]) => {
            const Icon = iconMap[info.icon];
            const projectCount = getProjectsByCategory(key).length;

            return (
              <Link
                key={key}
                to={`/projects?category=${key}`}
                className="group relative flex flex-col items-center gap-3 rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-card-hover"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${info.color} transition-transform group-hover:scale-110`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">{info.label}</h3>
                  <p className="text-sm text-muted-foreground">{projectCount} projects</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
