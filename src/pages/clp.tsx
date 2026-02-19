import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { BackButton } from "../components/ui/back-button";

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

type CLPData = {
  name: string;
  description: string;
  icon: string;
  color: string;
  members: Coordinator[];
  details: {
    aim: string;
    vision: string;
    mission: string;
    activities: Activity[];
  };
};

export const ComputerLiteracyProgramme = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/events/clp1.jpg",
      alt: "Seminar at School",
      category: "seminar",
    },
    {
      id: 2,
      src: "/events/clp2.jpg",
      alt: "Govt School Initiative at PARC Building",
      category: "training",
    },
    {
      id: 3,
      src: "/events/clp3.jpg",
      alt: "Coding classes in school",
      category: "coding",
    },
    {
      id: 4,
      src: "/events/clp4.jpg",
      alt: "Umeed",
      category: "events",
    },
  ];

  const coordinators: Coordinator[] = [
    {
      name: "Aayush Katakwar",
      position: "Computer Literacy Programme Coordinator",
    },
    { name: "Arin Samant", position: "Computer Literacy Programme Coordinator" },
  ];

  const clpData: CLPData = {
    name: "Computer Literacy Programme",
    description:
      "The Computer Literacy Programme (CLP) is an initiative focused on teaching digital skills and computer literacy to communities, especially underserved sections of society.",
    icon: "fas fa-laptop",
    color: "from-cyan-500 to-blue-500",
    members: coordinators.filter((c) => c.position.includes("Computer")),
    details: {
      aim: "To bridge the digital divide by providing accessible computer education and digital literacy to underserved communities, ensuring equal opportunities in the digital age.",
      vision: "To create a digitally empowered community where every child in nearby areas is aware of, confident with, and capable of using modern technology in this fast-changing world.",
      mission: "To introduce foundational computer literacy and practical digital skills to students of all age groups.",
      activities: [
        {
          title: "Government School (GS)",
          description:
            "Students from KG to Class 12 from nearby areas regularly attend sessions at the PARC (Pilani Atmanirbhar Resource Center) building. The initiative aims to bridge the digital divide by equipping students with essential and emerging technological skills. Participants are trained in fundamental computer applications such as Microsoft Excel, Word, PowerPoint, and basic Networking, along with exposure to trending digital skills including Artificial Intelligence tools, basic development concepts, and practical digital literacy applications. On average, 20–25 students attend daily, showing consistent participation and enthusiasm. The feedback from students has been overwhelmingly positive, with many expressing keen interest in learning through an updated and more advanced syllabus in the upcoming semester.",
        },
        {
          title: "Umeed",
          description:
            "Umeed is an inspiring collaborative initiative between NSS School and the CLP (Computer Literacy Program) department, aimed at promoting academic curiosity and excellence among school students in Pilani. This Olympiad features questions from Mathematics, Science, English, and Computer, and is open to students from classes 6 to 10, with the exact class range varying based on the structure and focus set by the organizing team for each edition. Students from several schools across Pilani participate in Umeed, including Hanumantpura, Hemant, Rakesh, NSS School, Parc Centre, and others. The event not only recognizes top performers with awards, but also celebrates every participant with certificates of appreciation, encouraging a love for learning and healthy competition, as well as helping students strengthen their preparation for future competitive exams.",
        },
        {
          title: "Coding Classes",
          description:
            "The Coding Classes Initiative is a structured multi-week program that introduces students to the fundamentals of web development using HTML and CSS. Students learn how to structure and design basic web pages, covering concepts such as headings, links, images, forms, and styling elements like colors and layouts. Our volunteers regularly visit partner schools to conduct sessions that combine theoretical concepts with hands-on practical coding experience. Students actively write and test their own code, gradually building simple web pages by the end of the course.",
        },
        {
          title: "Seminars",
          description:
            "Seminars are conducted twice every semester across different schools, with each session reaching 100+ students. These interactive sessions focus on the latest trends in the digital domain, including Cybersecurity, Artificial Intelligence (AI) tools, AR/VR technologies, and emerging tech innovations. The seminars aim to create awareness about the rapidly evolving technological landscape, encourage responsible digital usage, and inspire students to explore future opportunities in technology-driven fields.",
        },
        {
          title: "NSS School x CLP",
          description:
            "Under the collaboration of NSS School × CLP, weekly sessions are conducted for students of Classes 6–8, focusing on foundational computational concepts. Topics such as Factorials, Fibonacci Series, and Logical Reasoning are covered, which form the fundamental building blocks of computer science and problem-solving. These sessions are held once every week and are designed to strengthen students’ analytical thinking and mathematical foundations. As part of NSS School’s education initiatives across various subjects, this program specifically aims to build early interest and confidence in computational thinking and technology.",
        },
        {
          title: "Course on Computer Concepts (CCC)",
          description:
            "The Course on Computer Concepts (CCC) is a government-recognized certification examination conducted twice a year. It is open to individuals from various age groups, primarily 18 years and above, and serves as a valuable qualification for securing entry-level jobs that require basic computer proficiency. Successfully clearing this examination enhances employment opportunities and enables individuals to earn a stable income to support themselves and their families. At the PARC (Pilani Atmanirbhar Resource Center) Building, we provide daily training sessions to prepare candidates for the CCC examination. The preparation includes fundamental computer operations, digital literacy, internet usage, office applications, and exam-oriented practice, ensuring students are well-equipped and confident to successfully clear the certification.",
        },
        {
          title: "Adult Initiative",
          description:
            "The Adult Initiative, conducted in collaboration with CLP, focuses on imparting both technical and non-technical skills to older women, enabling them to become more self-reliant. Volunteers visit areas such as Poorvi Marg-1 to teach practical skills, including writing names, creating signatures, and writing in cursive—skills that not only assist in daily life but also empower the women to guide their children. Additionally, participants learn to use text-to-speech tools for typing and to browse educational resources on platforms like YouTube. This initiative strengthens community engagement while fostering confidence and independence among the women.",
        },
      ],
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const toggleActivity = (index: number) => {
    setExpandedActivity(expandedActivity === index ? null : index);
  };

  return (
    <div className="min-h-screen font-heading bg-[#FFF5F4]">
      <SEO
        title="Computer Literacy Programme - NSS BITS Pilani"
        description="The Computer Literacy Programme (CLP) is an initiative focused on teaching digital skills and computer literacy to communities, especially underserved sections of society."
      />
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
              {clpData.name}
            </h1>
            <p className="text-2xl italic font-light text-[#FFC3C0]">
              Bridging the Digital Divide
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-[#FFC3C0] bg-opacity-50"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-sm border border-[#FFC3C0]">
          <h2 className="text-3xl font-semibold text-[#0D5760] mb-6 text-center">
            About CLP
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{clpData.description}</p>
            <div className="bg-[#FFC3C0] bg-opacity-20 p-6 rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0D5760] mb-2 text-center">
                  Our Aim
                </h3>
                <p className="text-center italic text-gray-700">
                  "{clpData.details.aim}"
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D5760] mb-2 text-center">
                  Our Vision
                </h3>
                <p className="text-center italic text-gray-700">
                  "{clpData.details.vision}"
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D5760] mb-3 text-center">Our Mission</h3>
                <p className="whitespace-pre-line text-center">
                  {clpData.details.mission}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0D5760] inline-block px-6 pb-2 border-b-2 border-[#0D5760]">
              Our Programs
            </h2>
          </div>

          <div className="space-y-6">
            {clpData.details.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#0D5760]"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleActivity(index)}
                >
                  <h3 className="text-xl font-semibold text-[#0D5760]">
                    {activity.title}
                  </h3>
                  <span className="text-[#0D5760] text-2xl">
                    {expandedActivity === index ? "−" : "+"}
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
              CLP in Action
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-inner">
            <div className="aspect-[16/9]">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zNTAgMjUwSDQ1MFYzNTBIMzUwVjI1MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHA+CjwhLS0gSW1hZ2UgaWNvbiAtLT4KPHA+CjxwYXRoIGQ9Ik0zNzAgMjcwSDQzMFYzMDBIMzcwVjI3MFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zNzAgMzEwSDQzMFYzMjBIMzcwVjMxMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zNzAgMzMwSDQxMFYzNDBIMzcwVjMzMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxwYXRoIGQ9Ik0zODcgMjg3QzM5MC4zMTQgMjg3IDM5MyAyODQuMzE0IDM5MyAyODFDMzkzIDI3Ny42ODYgMzkwLjMxNCAyNzUgMzg3IDI3NUMzODMuNjg2IDI3NSAzODEgMjc3LjY4NiAzODEgMjgxQzM4MSAyODQuMzE0IDM4My42ODYgMjg3IDM4NyAyODdaIiBmaWxsPSIjOUNBNEFGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBNEFGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <p className="text-xl text-white font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"
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

export default ComputerLiteracyProgramme;
