import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Star,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CategoryBadge } from '@/components/projects/CategoryBadge';
import { StarRating } from '@/components/projects/StarRating';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProjectById, projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Project not found</h1>
            <p className="mt-2 text-muted-foreground">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-4">
              <Link to="/projects">Browse Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/50 py-4">
          <div className="container">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Header */}
        <section className="py-8">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Media Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div
                  className="relative aspect-video overflow-hidden rounded-xl bg-muted cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Play className="h-8 w-8 ml-1" />
                      </div>
                    </div>
                  )}
                  {project.images.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative flex-shrink-0 overflow-hidden rounded-lg ${
                          index === currentImageIndex
                            ? 'ring-2 ring-primary'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="h-16 w-24 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <CategoryBadge category={project.category} size="md" />
                  <h1 className="mt-3 text-3xl font-bold md:text-4xl">{project.title}</h1>
                  <p className="mt-3 text-lg text-muted-foreground">{project.shortDescription}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <StarRating rating={project.rating} size="lg" />
                  {project.downloads && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span>{project.downloads.toLocaleString()} downloads</span>
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {project.version && (
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>Version {project.version}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Updated {new Date(project.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                  <a href={project.actionUrl} target="_blank" rel="noopener noreferrer">
                    {project.actionType === 'use' ? (
                      <>
                        <ExternalLink className="h-5 w-5" />
                        Use Now
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download
                      </>
                    )}
                  </a>
                </Button>

                {/* Tech Stack */}
                <div>
                  <h3 className="mb-3 font-semibold">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description and Features */}
        <section className="border-t py-8">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Description */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About this project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Reviews */}
                {project.reviews.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {project.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{review.author}</span>
                            <StarRating rating={review.rating} size="sm" showValue={false} />
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                          <span className="mt-1 text-xs text-muted-foreground">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <CategoryBadge category={project.category} showIcon={false} />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="font-medium">{project.rating.toFixed(1)} / 5</span>
                    </div>
                    {project.downloads && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Downloads</span>
                        <span className="font-medium">{project.downloads.toLocaleString()}</span>
                      </div>
                    )}
                    {project.version && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Version</span>
                        <span className="font-medium">{project.version}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Updated</span>
                      <span className="font-medium">
                        {new Date(project.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="border-t bg-muted/50 py-12">
            <div className="container">
              <h2 className="mb-6 text-2xl font-bold">Related Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/10"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
