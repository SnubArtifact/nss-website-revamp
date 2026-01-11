import SEO from "../components/SEO";
import { BackButton } from "../components/ui/back-button";

export function GalleryPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Gallery - NSS BITS Pilani"
        description="Glimpses of our events, initiatives, and the impact we create through NSS BITS Pilani."
      />
      <header className="pt-16 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <BackButton />
          </div>
          <h1 className="text-3xl font-bold text-center">Gallery</h1>
        </div>
      </header>
    </div>
  );
}
