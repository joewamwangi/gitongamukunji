import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecordSection from "@/components/RecordSection";
import HighlightSection from "@/components/HighlightSection";
import GallerySection from "@/components/GallerySection";
import GallerySectionCopy from "@/components/GallerySectionCopy";
import GallerySectionCopy2 from "@/components/GallerySectionCopy2";
import VideoSection from "@/components/VideoSection";
import LiveTicker from "@/components/LiveTicker";
import WhistleblowerSection from "@/components/WhistleblowerSection";
import SectionDivider from "@/components/SectionDivider";
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
  "/images/hero-mobile-slide-1.jpg",
  "/images/hero-mobile-slide-2.jpg",
  "/images/hero-mobile-slide-3.jpg",
  "/images/hero-mobile-slide-4.jpg",
  "/images/hero-mobile-slide-5.jpg",
  "/images/hero-mobile-slide-6.jpg",
  "/images/hero-mobile-slide-7.jpg",
  "/images/hero-mobile-slide-8.jpg",
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
    id: "oslo",
    src: "/images/TheOsloCenterYouthInclusionForum.jpg",
    caption: "The Oslo Center Youth Inclusion Forum",
    location: "Oslo Center",
    date: "2025",
    href: "https://x.com/ESarabhai/status/1892849916973563914",
  },
  {
    id: "sdgs",
    src: "/images/YouthSDGsWeek2026.jpg",
    caption: "Youth SDGs Week 2026",
    location: "SDGs Week",
    date: "2026",
    href: "https://www.instagram.com/p/DXeLTiwlSJQ/",
  },
  {
    id: "jitume",
    src: "/images/JitumeHubGroundBreaking.webp",
    caption: "Jitume Hub Ground Breaking",
    location: "Jitume Hub",
    date: "2025",
    href: "https://citizen.digital/article/mp-mukunji-criticizes-govt-diaspora-job-plan-urges-focus-on-local-youth-empowerment-n359639",
  },
];

const educationPhotos = [
  {
    id: "ndunda",
    src: "/images/education-ndunda.jpg",
    caption: "Ndunda Primary School",
    location: "Ndunda",
    date: "2026",
    href: "https://formnikujituma.co.ke/ndunda-primary-school-transformation-takes-shape-as-construction-of-new-administration-block-begins/",
  },
  {
    id: "tende",
    src: "/images/education-tende.jpg",
    caption: "Tende Primary School",
    location: "Gaturi South",
    date: "June 2026",
    href: "https://formnikujituma.co.ke/tende-primary-school-undergoing-remarkable-transformation-in-gaturi-south-june-2026/",
  },
  {
    id: "engagement",
    src: "/images/education-engagement.jpg",
    caption: "Engagement With Manyatta School Heads",
    location: "Manyatta",
    date: "2026",
    href: "https://formnikujituma.co.ke/consultative-engagement-with-manyatta-secondary-school-principals/",
  },
];

const videos = [
  {
    youtubeId: "dAYnY1gjP-o",
    src: "/videos/placeholder-video-1.mp4",
    poster: "/images/placeholder-video-poster-1.jpg",
    title: "Finance Bill, Parliamentary Proceedings, Political Trajectory",
    description:
      "Mukunji explains his consistent \u201cNo\u201d vote on recent finance bills, arguing that they do not serve the interests of the common Kenyan.",
    location: "NTV Kenya",
    date: "Tuesday, Jun 22, 2026",
    source: "on NTV\u2019s #FixingTheNationNTV",
  },
  {
    facebookUrl: "https://www.facebook.com/GitongaMukunji/videos/documentary-the-price-of-representationpremieres-wednesday-8th-july-2026tomorrow/1585282613271151/",
    src: "/videos/placeholder-video-2.mp4",
    poster: "/images/placeholder-video-poster-2.jpg",
    title: "The Price of Representation",
    description:
      "Don\u2019t miss this compelling story of leadership, conviction and the cost of public service.",
    location: "Documentary Film",
    date: "Wednesday 8th July, 2026",
    source: "Documentary Premier",
  },
];

const socialFeeds = [
  { platform: "facebook" as const, label: "Facebook", href: "https://www.facebook.com/GitongaMukunji/", isLive: false },
  { platform: "x" as const, label: "X (Twitter)", href: "https://x.com/Gitonga_Mukunji?lang=en", isLive: false },
  { platform: "instagram" as const, label: "Instagram", href: "https://www.instagram.com/gitongamukunji/?hl=en", isLive: false },
  { platform: "tiktok" as const, label: "TikTok", href: "https://www.tiktok.com/@gitonga_mukunji", isLive: false },
  { platform: "youtube" as const, label: "YouTube", href: "https://youtube.com", isLive: false },
];

const footerLinks = [
  { label: "X", href: "https://x.com/Gitonga_Mukunji?lang=en" },
  { label: "Instagram", href: "https://www.instagram.com/gitongamukunji/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/GitongaMukunji/" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://www.tiktok.com/@gitonga_mukunji" },
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

      <SectionDivider />

      <div className="snap-section">
        <RecordSection stats={stats} mobileBgImage="/images/record-mobile.jpg" />
      </div>

      <SectionDivider />

      <div className="snap-section">
      <HighlightSection
        image={highlightImage}
        mobileImage="/images/highlight-mobile.jpg"
        quote="Today's generation holds leaders accountable like never before. Anyone who believes that being elected makes them unreachable or aloof is out of touch."
        attribution="Gitonga Mukunji"
      />
      </div>

      <SectionDivider />

      <div className="snap-section">
        <GallerySection photos={galleryPhotos} />
      </div>

      <SectionDivider />

      <div className="snap-section">
        <GallerySectionCopy photos={educationPhotos} />
      </div>

      <SectionDivider />

      <div className="snap-section">
        <GallerySectionCopy2 photos={educationPhotos} />
      </div>

      <SectionDivider />

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
