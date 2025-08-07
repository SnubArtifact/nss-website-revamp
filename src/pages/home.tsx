import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { AboutSection } from "../components/about-section";
import { ActivitiesSection } from "../components/activities-section";
import { ContactSection } from "../components/contact-section";
import { EventsSection } from "../components/events-section";
import { Footer } from "../components/footer";
import Landing from "../components/landing/landing";
import { Navigation } from "../components/navigation";
import { NewsletterSection } from "../components/newsletter-section";
import { TeamSection } from "../components/team-section";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current!,
      content: smoothContentRef.current!,
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  useGSAP(() => {
    // Create a subtle enhancement that's triggered by the flower stem
    // Content is visible from start but gets enhanced when flower completes
    const enhancementTl = gsap.timeline();
    
    ScrollTrigger.create({
      trigger: landingRef.current,
      start: "160% 20%", // When stem is almost complete
      end: "170% 20%", // When stem completes
      scrub: 1,
      markers: false,
      animation: enhancementTl,
    });

    // Content starts slightly faded but fully functional
    gsap.set(mainContentRef.current, {
      opacity: 0.7,
    });

    // Enhanced reveal when flower stem reaches the content
    enhancementTl.to(mainContentRef.current, {
      opacity: 1,
      scale: 1.02,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(mainContentRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Normal scroll-triggered animations for sections
    const sections = gsap.utils.toArray(".content-section");
    sections.forEach((section: any, index) => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef}>
      <div id="smooth-content" ref={smoothContentRef}>
        <div className="z-10 relative" ref={landingRef}>
          <Landing />
          <Navigation />
        </div>
        <div 
          className="min-h-screen bg-gray-50 z-20 relative" 
          ref={mainContentRef}
        >
          <div className="content-section">
            <AboutSection />
          </div>
          <div className="content-section">
            <ActivitiesSection />
          </div>
          <div className="content-section">
            <EventsSection />
          </div>
          <div className="content-section">
            <TeamSection />
          </div>
          <div className="content-section">
            <NewsletterSection />
          </div>
          <div className="content-section">
            <ContactSection />
          </div>
          <div className="content-section">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
