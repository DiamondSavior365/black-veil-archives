import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArchiveSection from "@/components/ArchiveSection";
import HauntedMapPreview from "@/components/HauntedMapPreview";
import HauntingCallSection from "@/components/HauntingCallSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* <section className="relative min-h-screen px-6 py-8 sm:px-10 lg:px-20"> */}
      <section className="blood-stain relative min-h-screen px-6 py-8 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,29,29,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col">
          <Header />
          <HeroSection />
        </div>
      </section>

      <ArchiveSection />
      <HauntedMapPreview />
      <HauntingCallSection />
      <Footer />
    </main>
  );
}
