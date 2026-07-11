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

const heroImages = [
  "/images/placeholder-hero-1.jpg",
  "/images/placeholder-hero-2.jpg",
];

const heroVideo = "";

const highlightImage = "/images/placeholder-gallery-1.jpg";

const stats = [
  {
    label: "Projects Delivered",
    value: "—",
    description: "Infrastructure, water, education & health projects completed since 2022",
    progress: 0,
  },
  {
    label: "Manifesto Progress",
    value: "—",
    description: "Of 2022 campaign pledges tracked and verified",
    progress: 0,
  },
  {
    label: "Youth Supported",
    value: "—",
    description: "Bursaries, skills training & empowerment programs",
    progress: 0,
  },
  {
    label: "Town Halls Held",
    value: "—",
    description: "Public barazas, constituency forums & feedback sessions",
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
    <>
      <Navbar />
      <Hero
        images={heroImages}
        video={heroVideo || undefined}
        name="Gitonga Mukunji"
        title="MP, Manyatta Constituency"
        tagline="Track every promise. Every project. Every voice."
        ctaLabel="#Form_Ni_Kujituma"
        ctaHref="#record"
      />

      <RecordSection stats={stats} />

      <HighlightSection
        image={highlightImage}
        quote="This constituency belongs to the people. My job is to serve, to deliver, and to never forget where I come from."
        attribution="Gitonga Mukunji"
      />

      <GallerySection photos={galleryPhotos} />

      <VideoSection videos={videos} />

      <LiveTicker feeds={socialFeeds} />

      <WhistleblowerSection />

      <Footer
        socialLinks={footerLinks}
        email="placeholder@gitongamukunji.com"
        phone="+254 7XX XXX XXX"
      />
    </>
  );
}
