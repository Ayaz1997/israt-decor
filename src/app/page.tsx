import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import OfferingsSection from '@/components/landing/OfferingsSection';
import ValuesSection from '@/components/landing/ValuesSection';
import GallerySection from '@/components/landing/GallerySection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <OfferingsSection />
        <ValuesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
