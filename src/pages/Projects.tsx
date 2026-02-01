import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CategoryBadge } from '@/components/projects/CategoryBadge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { projects, ProjectCategory, categoryInfo } from '@/data/projects';

type SortOption = 'newest' | 'popular' | 'alphabetical' | 'rating';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>(
    (searchParams.get('category') as ProjectCategory) || 'all'
  );
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.techStack.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case 'popular':
        result.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
        break;
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('newest');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || sortBy !== 'newest';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b bg-muted/50 py-12">
          <div className="container">
            <h1 className="text-3xl font-bold md:text-4xl">All Projects</h1>
            <p className="mt-2 text-muted-foreground">
              Explore our complete collection of {projects.length} projects
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="sticky top-16 z-40 border-b bg-card py-4">
          <div className="container">
            <div className="flex flex-wrap items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select
                value={selectedCategory}
                onValueChange={(value) => handleCategoryChange(value as ProjectCategory | 'all')}
              >
                <SelectTrigger className="w-[180px] bg-card">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  <SelectItem value="all">All Categories</SelectItem>
                  {Object.entries(categoryInfo).map(([key, info]) => (
                    <SelectItem key={key} value={key}>
                      {info.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[150px] bg-card">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
                  <X className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>

            {/* Category Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All
              </button>
              {(Object.keys(categoryInfo) as ProjectCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`transition-opacity ${
                    selectedCategory === category ? '' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <CategoryBadge category={category} size="md" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8">
          <div className="container">
            {filteredProjects.length > 0 ? (
              <>
                <p className="mb-6 text-sm text-muted-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">No projects found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
