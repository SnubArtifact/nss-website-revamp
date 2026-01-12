import SEO from "../components/SEO";
import { BackButton } from "../components/ui/back-button";

interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  bg?: string; // Optional background color for better visibility if needed
}

// Logos located in public/sponsors/logo/
const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "AMD",
    logoUrl: "/sponsors/logo/amd.svg",
    websiteUrl: "https://www.amd.com",
  },
  {
    id: 2,
    name: "Klüber Lubrication",
    logoUrl: "/sponsors/logo/kluber.svg",
    websiteUrl: "https://www.klueber.com",
  },
  {
    id: 3,
    name: "Pranic Fruits",
    logoUrl: "/sponsors/logo/pranic.jpeg",
    // websiteUrl: "https://pranicfruits.com",
  },
  {
    id: 4,
    name: "Fortis",
    logoUrl: "/sponsors/logo/fortis.png",
    websiteUrl: "https://www.fortishealthcare.com",
  },
  {
    id: 5,
    name: "LG",
    logoUrl: "/sponsors/logo/lg.png",
    websiteUrl: "https://www.lg.com",
  },
  {
    id: 6,
    name: "NHPC",
    logoUrl: "/sponsors/logo/nhpc.jpeg",
    websiteUrl: "https://www.nhpcindia.com",
  },
  {
    id: 7,
    name: "Denso",
    logoUrl: "/sponsors/logo/denso.png",
    websiteUrl: "https://www.denso.com",
  },
];

export const SponsorsPage = () => {
  return (
    <div className="min-h-screen font-heading bg-[#FFF5F4]">
      <SEO
        title="Our Sponsors - NSS BITS Pilani"
        description="We are grateful for the support of our sponsors who make our initiatives possible."
      />
      
      {/* Header Section */}
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton
              variant="ghost"
              className="text-[#FFE5E3] hover:bg-[#FFE5E3] hover:text-[#0D5760]"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
              Our Sponsors
            </h1>
            <p className="text-2xl italic font-light text-[#FFC3C0]">
              Partners in Social Impact
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Thank You Message */}
        <section className="mb-16 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
            <h2 className="text-2xl font-semibold text-[#0D5760] mb-4">
              A Heartfelt Thank You
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We extend our deepest gratitude to our sponsors and partners. Your
              generous support empowers us to drive meaningful change and execute
              impactful initiatives for the betterment of society. Together, we
              are making a difference.
            </p>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section>
          <h2 className="text-3xl font-bold text-[#0D5760] text-center mb-12">
            Our Past Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
  const CardContent = () => (
    <div className="h-full bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#0D5760]/20 flex flex-col items-center justify-center gap-4 group">
      <div 
        className={`w-full aspect-video flex items-center justify-center p-4 rounded-lg overflow-hidden relative ${sponsor.bg || 'bg-white'}`}
      >
        <img
          src={sponsor.logoUrl}
          alt={`${sponsor.name} logo`}
          className="w-full h-full object-contain filter transition-all duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            // Show text fallback if image fails, via sibling or parent logic?
            // Easier to just let the text below handle it, or replace src
            e.currentTarget.parentElement?.classList.add('bg-gray-100');
            // But we already have text below.
          }}
        />
      </div>
      <h3 className="text-lg font-medium text-[#0D5760] text-center">
        {sponsor.name}
      </h3>
    </div>
  );

  if (sponsor.websiteUrl) {
    return (
      <a
        href={sponsor.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-[#0D5760] focus:ring-offset-2 rounded-xl"
        title={`Visit ${sponsor.name}`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="h-full">
      <CardContent />
    </div>
  );
};

export default SponsorsPage;
