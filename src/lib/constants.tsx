export const TEAM_POSITIONS = {
  PRESIDENT: "President",
  VICE_PRESIDENT: "Vice President",
  SECRETARY: "Secretary",
  EDUCATION_COORDINATOR: "Education Coordinator",
  HEALTH_COORDINATOR: "Health Coordinator",
  ENVIRONMENT_COORDINATOR: "Environment Coordinator",
  SOCIAL_COORDINATOR: "Social Coordinator",
} as const;

export const CONTACT_SUBJECTS = [
  "Volunteer Inquiry",
  "Event Information",
  "Partnership Opportunity",
  "General Question",
  "Other",
] as const;

export const ACTIVITIES = [
  {
    title: "School",
    description:
      "NSS BITS Pilani is committed to providing free and high quality holistic education to students from grade 1 to 12. We focus on academic excellence, moral values, and social responsibility.",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-book",
    color: "bg-bits-blue",
    stats: "50+ Students Impacted",
  },
  {
    title: "Health and Public Awareness",
    description:
      "The Department of Health and Public Awareness aims to spread awareness about important health and social issues and help society. We work to empower those in need so that they can live a more comfortable life and make well-informed decisions.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-stethoscope",
    color: "bg-community-green",
    stats: "200+ People Served",
  },
  {
    title: "Parishodh",
    description:
      "Parishodh focuses on fostering a sense of social and environmental responsibility among students. We aim to contribute to the upliftment of the environment and the society as a whole through various initiatives.",
    image:
      "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-seedling",
    color: "bg-creative-purple",
    stats: "100+ Trees Planted",
  },
  {
    title: "Department of Sponsorship and Collaboration",
    description:
      "The primary aim of the Department of Sponsorship & Collaboration (DeSCo) at NSS BITS Pilani is to secure and manage financial and in-kind support essential for the smooth execution of all major NSS events.",
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-hand-holding-heart",
    color: "bg-energy-amber",
    stats: "Emergency Response",
  },
  {
    title: "Computer Literacy Programme",
    description:
      "The Computer Literacy Programme (CLP) is an initiative focused on teaching digital skills and computer literacy to communities, especially underserved sections of society.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-laptop",
    color: "bg-action-red",
    stats: "Tech Training",
  },
  {
    title: "Umang",
    description:
      "Umang is a dedicated department of NSS BITS Pilani that focuses on providing essential services and support to those in need. We focus on enhancing the lives of the underprivileged and promoting social welfare.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-gift",
    color: "bg-bits-blue",
    stats: "Monthly Drives",
  },
  {
    title: "Department of Design and Development",
    description:
      "The Department of Design and Development (D3) is the creative and technical backbone of NSS BITS Pilani. It is responsible for all visual communication and digital presence.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: "fas fa-palette",
    color: "bg-purple-600",
    stats: "Creative Solutions",
  },
];

export const IMPACT_STATS = [
  {
    value: "1969",
    label: "Started in",
    color: "text-blue-700",
  },
  {
    value: "10,000+",
    label: "Lives Impacted",
    color: "text-green-700",
  },
  {
    value: "50+",
    label: "Projects Completed",
    color: "text-purple-600",
  },
  {
    value: "25,000+",
    label: "Service Hours",
    color: "text-amber-600",
  },
];

export const OBJECTIVES = [
  {
    title: "Education & Awareness",
    description:
      "NSS BITS Pilani is dedicated to promoting literacy and social awareness through various educational programs and outreach initiatives. We focus on empowering underprivileged communities with knowledge and skills for a better future.",
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Health & Hygiene",
    description:
      "NSS BITS Pilani provides free medical assistance through medical camps and spreads awareness about numerous health and sanitation issues in various villages across Pilani.",
    icon: "fas fa-heart",
  },
  {
    title: "Environment",
    description:
      "NSS BITS Pilani is committed to environmental sustainability and conservation. We focus on promoting awareness about the environment and take various initiatives towards the same. Our goal is to promote a greener and cleaner Pilani.",
    icon: "fas fa-leaf",
  },
];
