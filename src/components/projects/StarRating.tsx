import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export const StarRating = ({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = true,
  className,
}: StarRatingProps) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const filled = index < Math.floor(rating);
        const partial = index === Math.floor(rating) && rating % 1 > 0;

        return (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              filled || partial
                ? 'fill-warning text-warning'
                : 'fill-muted text-muted'
            )}
          />
        );
      })}
      {showValue && (
        <span className={cn('ml-1 font-medium', textSizes[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
