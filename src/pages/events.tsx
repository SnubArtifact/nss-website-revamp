import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { BackButton } from '../components/ui/back-button';


type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

type Activity = {
  title: string;
  description: string;
};

type Coordinator = {
  name: string;
  position: string;
  contact?: string;
};

type EventsData = {
  name: string;
  description: string;
  icon: string;
  color: string;
  members: Coordinator[];
  details: {
    mission: string;
    activities: Activity[];
  };
};

export const Events = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);


  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/events/bdc1.jpg', alt: 'Blood Donation Camp', category: 'campaign' },
    { id: 2, src: '/events/cdy1.jpg', alt: 'Conferencia de Youth', category: 'workshop' },
    { id: 3, src: '/events/junoon1.jpg', alt: 'Junoon', category: 'cultural' },

  ];

  //  coordinators data
  const coordinators: Coordinator[] = [
    { name: "Anuj Paliwal", position: "Events Coordinator" },

  ];


  const eventsData: EventsData = {
    name: "Events",
    description: "Planning and organizing major NSS events and festivals, managing event logistics and coordination activities.",
    icon: "fas fa-calendar-alt",
    color: "from-purple-500 to-pink-500",
    members: coordinators.filter((c) => c.position.includes("Events")),
    details: {
      mission: "To create impactful events that raise social awareness and engage the community in meaningful activities.",
      activities: [
        {
          title: "Junoon",
          description: "Junoon is a 2-day sports extravaganza for specially-abled children, annually organised by NSS, BITS Pilani. The event also has fun-filled recreational activities, a cultural Junoon Nite, and motivational talks by our honourable guests, among other things, to give the participants an unparalleled experience. Junoon offers a stage where specially-abled individuals can proudly display their talents to a wider audience, reinforcing the belief in equality for all. The main aim of this event however is to serve as a beacon of awareness, shedding light on the challenges faced by the remarkable children. The event fosters understanding and compassion for a more inclusive and empathetic society. We had the pleasure of welcoming around 100 children per year accompanied by their dedicated helpers. Till now, over 50+ organisations have participated in Junoon making it an excellent event.",
        },
        {
          title: "Blood Donation Camp",
          description: "The Blood Donation Camp (BDC) organized by NSS BITS Pilani is committed to public health and humanitarian service. The camp has grown into a lifesaving initiative that reflects the unity, compassion, and civic responsibility of the BITSian community. Held annually, the Blood Donation Camp witnesses the enthusiastic footfall of over 1000+ students, faculty, and staff members, with hundreds of units of blood collected in a couple of days. Each unit has the potential to save up to three lives, directly benefiting accident victims, cancer patients, children with blood disorders like thalassemia, and individuals undergoing critical surgeries.Furthermore, the camp serves as a platform to raise awareness about the significance of regular blood donations and the positive impact it can have on enhancing healthcare outcomes for patients in need. The camp is organized in collaboration with Indian Red Cross Society (IRCS), ensuring safe collection procedures and efficient distribution of donated blood to areas where it is most needed. In the academic year 2024-25 NSS BITS Pilani conducted its 43rd edition of BDC with over 600+ Donors.",
        },
        {
          title: "Shop for Smile",
          description: "Every year, a stall is set up by NSS, BITS Pilani during the Oasis - Cultural Festival of BITS Pilani. It is intended to promote various NGOs working tirelessly for social welfare. Various products made by rural women and people with disabilities and procured by NGOs are exhibited at the booth. Products include stationary, candles, handbags, Tshirts, laptop cases and many more handicraft items. We joined hands with over 11 NGOs including Umang from Jaipur, Tender Heart, Women Synergy. Almost all the products being sold and left products were sent back to NGOs along with the money for sold products. We are glad to revamp our initiative in which we will support the women and children to make the handicraft and sell them.",
        },
        {
          title: "Conferencia de Youth",
          description: "CdY is a social conference organized by NSS BITS Pilani annually that provides various social organizations across the country a platform to discuss, ideate and innovate to bring positive impact in the society. It is a series of events organized during APOGEE - BITS Pilani' s own tech fest, to highlight initiatives taken by social organizations so that others can get inspired and contribute to change. These events attempt at bringing exposure to works of social service organizations and individuals who embody the gist of helping the society and growing with it.",
        },
        {
          title: "Old Notebook Collection Drive (ONCD)",
          description: "The Old Notebook Collection Drive (ONCD) is an annual NSS initiative conducted at the end of every academic year to collect used notebooks from students across campus. These notebooks are then sent for recycling, helping reduce paper waste and promote eco-friendly practices within the BITS Pilani community.",
        },
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);



  // Toggle activity expansion
  const toggleActivity = (index: number) => {
    setExpandedActivity(expandedActivity === index ? null : index);
  };

  return (
    <div className="min-h-screen font-heading bg-[#FFF5F4]">
      <SEO
        title="Events - NSS BITS Pilani"
        description="Planning and organizing major NSS events and festivals, managing event logistics and coordination activities."
      />
      {/* Header */}
      <header className="py-12 bg-[#0D5760]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton variant="ghost" className="text-[#FFE5E3] hover:bg-[#FFE5E3] hover:text-[#0D5760]" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#FFE5E3] tracking-tight">
              {eventsData.name} Department
            </h1>
            <p className="text-2xl italic font-light text-[#FFC3C0]">
              Creating Impactful Community Experiences
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About Our Department
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{eventsData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0D5760] mb-3">Our Mission</h3>
              <p className="whitespace-pre-line">{eventsData.details.mission}</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Activities
            </h2>
          </div>

          <div className="space-y-6">
            {eventsData.details.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#0D5760]"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleActivity(index)}
                >
                  <h3 className="text-xl font-semibold text-[#0D5760]">{activity.title}</h3>
                  <span className="text-[#0D5760] text-2xl">
                    {expandedActivity === index ? '−' : '+'}
                  </span>
                </div>
                {expandedActivity === index && (
                  <div className="mt-4 text-gray-700">
                    {activity.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Events
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-inner">
            <div className="aspect-[16/9]">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zNTAgMjUwSDQ1MFYzNTBIMzUwVjI1MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHA+CjwhLS0gSW1hZ2UgaWNvbiAtLT4KPHA+CjxwYXRoIGQ9Ik0zNzAgMjcwSDQzMFYzMDBIMzcwVjI3MFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zNzAgMzEwSDQzMFYzMjBIMzcwVjMxMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zNzAgMzMwSDQxMFYzNDBIMzcwVjMzMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zODcgMjg3QzM5MC4zMTQgMjg3IDM5MyAyODQuMzE0IDM5MyAyODFDMzkzIDI3Ny42ODYgMzkwLjMxNCAyNzUgMzg3IDI3NUMzODMuNjg2IDI3NSAzODEgMjc3LjY4NiAzODEgMjgxQzM4MSAyODQuMzE0IDM4My42ODYgMjg3IDM4NyAyODdaIiBmaWxsPSIjOUNBNEFGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBNEFGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <p className="text-xl text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>


        </section>

      </main>
    </div>
  );
};

export default Events;