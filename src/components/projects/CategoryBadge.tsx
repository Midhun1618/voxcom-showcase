import { Mic, Smartphone, Terminal, Coffee, Globe, LucideIcon } from 'lucide-react';
import { ProjectCategory, categoryInfo } from '@/data/projects';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Smartphone,
  Terminal,
  Coffee,
  Globe,
};

interface CategoryBadgeProps {
  category: ProjectCategory;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const CategoryBadge = ({ category, size = 'sm', showIcon = true }: CategoryBadgeProps) => {
  const info = categoryInfo[category];
  const Icon = iconMap[info.icon];

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        info.color,
        sizeClasses[size]
      )}
    >
      {showIcon && Icon && <Icon className={iconSizes[size]} />}
      {info.label}
    </span>
  );
};
