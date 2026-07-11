import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import EngagementGallery from "@/components/EngagementGallery";
import VideoModule from "@/components/VideoModule";
import TeaserCard from "@/components/TeaserCard";
import Footer from "@/components/Footer";

/*
  PLACEHOLDER DATA — Replace these arrays/objects with real data from CMS or API.
  - image1: a well-lit environmental portrait (campaign-era)
  - image2: a current in-office/constituency photo
  - stats: real verified numbers from the office
  - gallery photos: real constituency event photos with honest captions
  - videos: unscripted interview/event clips, vertical 9:16 preferred
*/

const heroImages = {
  image1: "/images/placeholder-hero-1.jpg",
  image2: "/images/placeholder-hero-2.jpg",
};

const stats = [
  { label: "Projects Delivered", value: "—", description: "Track record since 2022" },
  { label: "Manifesto Complete", value: "—", description: "Against 2022 pledges" },
  { label: "Youth Programs", value: "—", description: "Bursaries & skills training" },
  { label: "Public Forums", value: "—", description: "Town halls & barazas held" },
];

const galleryPhotos = [
  {
    id: "1",
    src: "/images/placeholder-gallery-1.jpg",
    caption: "Youth leadership forum at Manyatta Technical Institute",
    location: "Manyatta Technical Institute",
    date: "Mar 2025",
    rows: 2 as const,
  },
  {
    id: "2",
    src: "/images/placeholder-gallery-2.jpg",
    caption: "Bursary disbursement day — over 200 students supported",
    location: "Embu Town",
    date: "Feb 2025",
  },
  {
    id: "3",
    src: "/images/placeholder-gallery-3.jpg",
    caption: "Market walk with traders — real talk on business challenges",
    location: "Manyatta Market",
    date: "Jan 2025",
    cols: 2 as const,
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
    caption: "Constituents queue for free medical camp",
    location: "Kavutiri",
    date: "Oct 2024",
    rows: 2 as const,
  },
  {
    id: "7",
    src: "/images/placeholder-gallery-7.jpg",
    caption: "Meeting with women's chama groups on economic empowerment",
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
      "A young constituent asks about job creation and Mukunji responds, no script, no spin. Recorded at a town hall in Manyatta, January 2025.",
  },
  {
    src: "/videos/placeholder-video-2.mp4",
    poster: "/images/placeholder-video-poster-2.jpg",
    title: "Bursary day — the real work",
    description:
      "Behind the scenes at a bursary disbursement. No staging, just the queue, the families, and the process. February 2025.",
  },
  {
    src: "/videos/placeholder-video-3.mp4",
    poster: "/images/placeholder-video-poster-3.jpg",
    title: "Roads or water? A constituent demands answers",
    description:
      "A resident holds the MP to account on delayed projects. This is what accountability looks like in real time.",
  },
];

const socialLinks = [
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
      <Hero
        image1={heroImages.image1}
        image2={heroImages.image2}
        name="Gitonga Mukunji"
        title="MP, Manyatta Constituency"
        tagline="Track every promise. Every project. Every voice."
        ctaLabel="See the scorecard"
        ctaHref="/scorecard"
        secondaryLabel="Report an issue"
        secondaryHref="/report"
        isLive={false}
      />

      <StatStrip stats={stats} />

      <EngagementGallery photos={galleryPhotos} />

      <VideoModule videos={videos} />

      <section className="bg-cream-light py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <TeaserCard
              title="Manifesto Tracker"
              description="Every promise made in 2022, tracked publicly. See what's been delivered, what's in progress, and what's behind schedule."
              href="/manifesto"
              cta="View the tracker"
              accent="amber"
            />
            <TeaserCard
              title="Report an Issue"
              description="Spot a broken road, a stalled project, or a service gap? Flag it directly — every report is logged and followed up."
              href="/report"
              cta="Raise an issue"
              accent="green"
            />
          </div>
        </div>
      </section>

      <Footer
        socialLinks={socialLinks}
        email="placeholder@gitongamukunji.com"
        phone="+254 7XX XXX XXX"
        constituencyOffice="Manyatta Constituency Office, Embu"
      />
    </>
  );
}
