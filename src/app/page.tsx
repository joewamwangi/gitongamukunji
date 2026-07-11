import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecordSection from "@/components/RecordSection";
import HighlightSection from "@/components/HighlightSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import LiveTicker from "@/components/LiveTicker";
import WhistleblowerSection from "@/components/WhistleblowerSection";
import Footer from "@/components/Footer";

/*
  PLACEHOLDER DATA — Replace with real images, stats, and copy from the MP's office.
  - heroImages[0]: high-quality environmental portrait (campaign-era, well-lit, confident)
  - heroImages[1]: current in-office or constituency photo (crossfade target)
  - heroVideo: optional vertical clip for the scroll-reveal video layer
  - highlightImage: dramatic full-bleed image for the quote section
  - stats: verified numbers from the office
  - galleryPhotos: real constituency photos with honest captions
  - videos: unscripted clips, 9:16 vertical preferred
  - socialFeeds: direct links to social platforms
*/

const heroMobileImages = [
  "/images/hero-mobile-1.jpg",
  "/images/hero-mobile-2.jpg",
];

const heroDesktopImages = [
  "/images/hero-desktop-1.jpg",
  "/images/hero-desktop-2.png",
];

const heroVideo = "";

const highlightImage = "/images/placeholder-gallery-1.jpg";

const stats = [
  {
    label: "Education & Social Equity, Infrastructure",
    value: "—",
    description: "Direct involvement in local affairs; #MasomoBilaStress Ed. initiative, Learning Institutions Facelifts, Aggressive Roads Oversight",
    progress: 0,
  },
  {
    label: "Youth Empowerment",
    value: "—",
    description: "Digital Hubs roll outs, Advocacy for Youth-Led NYC, \"Spanner Boy\" Philosophy",
    progress: 0,
  },
  {
    label: "Agricultural & Economic Defense",
    value: "—",
    description: "Agricultural industry protection, Local Markets Uplifts",
    progress: 0,
  },
  {
    label: "Legislative Integrity",
    value: "—",
    description: "Consequential tax legislations oversight, Two-Thirds Quorum Guardrail for Finance Bills",
    progress: 0,
  },
];

const galleryPhotos = [
  {
    id: "1",
    src: "/images/placeholder-gallery-1.jpg",
    caption: "Youth leadership forum at Manyatta Technical Institute",
    location: "Manyatta Technical Institute",
    date: "Mar 2025",
  },
  {
    id: "2",
    src: "/images/placeholder-gallery-2.jpg",
    caption: "Bursary disbursement — over 200 students supported",
    location: "Embu Town",
    date: "Feb 2025",
  },
  {
    id: "3",
    src: "/images/placeholder-gallery-3.jpg",
    caption: "Market walk with traders discussing business challenges",
    location: "Manyatta Market",
    date: "Jan 2025",
  },
  {
    id: "4",
    src: "/images/placeholder-gallery-4.jpg",
    caption: "Water project commissioning in Kithimu ward",
    location: "Kithimu",
    date: "Dec 2024",
  },
  {
    id: "5",
    src: "/images/placeholder-gallery-5.jpg",
    caption: "Road inspection — holding contractors to account",
    location: "Nguviu",
    date: "Nov 2024",
  },
  {
    id: "6",
    src: "/images/placeholder-gallery-6.jpg",
    caption: "Free medical camp — hundreds of constituents served",
    location: "Kavutiri",
    date: "Oct 2024",
  },
  {
    id: "7",
    src: "/images/placeholder-gallery-7.jpg",
    caption: "Women's chama groups meeting on economic empowerment",
    location: "Embu Town",
    date: "Sep 2024",
  },
];

const videos = [
  {
    src: "/videos/placeholder-video-1.mp4",
    poster: "/images/placeholder-video-poster-1.jpg",
    title: "On youth unemployment — unscripted",
    description:
      "A young constituent asks about job creation. Mukunji responds, no script, no spin. Recorded at a town hall in Manyatta.",
    location: "Manyatta Town Hall",
    date: "Jan 2025",
  },
  {
    src: "/videos/placeholder-video-2.mp4",
    poster: "/images/placeholder-video-poster-2.jpg",
    title: "Bursary day — the real work",
    description:
      "Behind the scenes at a bursary disbursement. No staging, just the queue, the families, and the process.",
    location: "Embu Town",
    date: "Feb 2025",
  },
  {
    src: "/videos/placeholder-video-3.mp4",
    poster: "/images/placeholder-video-poster-3.jpg",
    title: "Roads or water? A constituent demands answers",
    description:
      "A resident holds the MP to account on delayed projects. This is what accountability looks like in real time.",
    location: "Nguviu",
    date: "Nov 2024",
  },
];

const socialFeeds = [
  { platform: "facebook" as const, label: "Facebook", href: "#", isLive: false },
  { platform: "x" as const, label: "X (Twitter)", href: "#", isLive: false },
  { platform: "instagram" as const, label: "Instagram", href: "#", isLive: false },
  { platform: "tiktok" as const, label: "TikTok", href: "#", isLive: false },
  { platform: "youtube" as const, label: "YouTube", href: "#", isLive: false },
];

const footerLinks = [
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Home() {
  return (
    <div className="snap-container">
      <Navbar />
      <div className="snap-section">
        <Hero
          mobileImages={heroMobileImages}
          desktopImages={heroDesktopImages}
          video={heroVideo || undefined}
          name="Gitonga Mukunji"
          title="MP, Manyatta Constituency"
          tagline="I will not be intimidated because I will continue defending my people!"
          ctaLabel="#Form_Ni_Kujituma"
          ctaHref="#record"
        />
      </div>

      <div className="snap-section">
        <RecordSection stats={stats} mobileBgImage={heroMobileImages[1]} />
      </div>

      <div className="snap-section">
      <HighlightSection
        image={highlightImage}
        mobileImage="/images/highlight-mobile.jpg"
        quote="Today's generation holds leaders accountable like never before. Anyone who believes that being elected makes them unreachable or aloof is out of touch."
        attribution="Gitonga Mukunji"
      />
      </div>

      <div className="snap-section">
        <GallerySection photos={galleryPhotos} />
      </div>

      <div className="snap-section">
        <VideoSection videos={videos} />
      </div>

      <div className="snap-section">
        <LiveTicker feeds={socialFeeds} />
      </div>

      <div className="snap-section">
        <WhistleblowerSection />
      </div>

      <div className="snap-section">
        <Footer
          socialLinks={footerLinks}
          email="placeholder@gitongamukunji.com"
          phone="+254 7XX XXX XXX"
        />
      </div>
    </div>
  );
}
