import HeroSection from './components/hero';
import FeatureImagesSection from './components/feature-images';
import TimelineTable from './components/timeline/timeline-table';
import Gallery from './components/gallery';
import Story from './components/story';
import { CalendarSection } from './components/calendar-section';
import { FooterSection } from './components/footer-section';

export default function Home() {
  return (
    <div className="">
      <main className="overflow-x-hidden">
        <HeroSection />
        <FeatureImagesSection />
        <Story />
        <TimelineTable />
        <Gallery />
        <CalendarSection />
        <FooterSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
