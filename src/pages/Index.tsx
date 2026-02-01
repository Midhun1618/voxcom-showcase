import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCarousel } from '@/components/home/FeaturedCarousel';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { LatestProjects } from '@/components/home/LatestProjects';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCarousel />
        <CategoryGrid />
        <LatestProjects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
