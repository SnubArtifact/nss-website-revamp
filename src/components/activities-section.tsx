import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { TeamMember } from "../../shared/schema";
import { IMPACT_STATS } from "../lib/constants";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function ActivitiesSection() {
  const {
    data: teamMembers = [
      {
        id: 1,
        name: "Sitaram Prajapat",
        position: "School Coordinator",
      },
      {
        id: 2,
        name: "Shreena Kansagra",
        position: "School Coordinator",
      },
      {
        id: 3,
        name: "Isha Gupta",
        position: "Parisodh Coordinator",
      },

      {
        id: 4,
        name: "Siddharth Bhamidipati",
        position: "Parisodh Coordinator",
      },
      {
        id: 5,
        name: "Aarushi Tiwari",
        position: "Umang Coordinator",
      },
      {
        id: 6,
        name: "Shivansh Saxena",
        position: "Umang Coordinator",
      },
      {
        id: 7,
        name: "Aayush Katakwar",
        position: "Computer Literacy Programme Coordinator",
      },
      {
        id: 8,
        name: "Mansi Mittal",
        position: "Computer Literacy Programme Coordinator",
      },
      {
        id: 9,
        name: "Samridhi Agrawal",
        position: "Health and public awareness Coordinator",
      },
      {
        id: 10,
        name: "Bhuvanyu Kumar",
        position: "Health and public awareness Coordinator",
      },
      {
        id: 11,
        name: "Soumya Yadav",
        position: "Department of Sponsorship and Collaboration Coordinator",
      },
      {
        id: 12,
        name: "Jainam Gandhi",
        position: "Events Coordinator",
      },
      {
        id: 13,
        name: "Anuj Paliwal",
        position: "Events Coordinator",
      },
      {
        id: 14,
        name: "Atharv Agrawal",
        position: "Department of Design and Development Coordinator",
      },
      {
        id: 15,
        name: "Dhruv Gupta",
        position: "Department of Design and Development Coordinator",
      },
      {
        id: 16,
        name: "Medhansh Sharma",
        position: "Department of Design and Development Coordinator",
      },
    ],
    isLoading,
  } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  const coordinators = teamMembers.filter((member) =>
    member.position.includes("Coordinator")
  );

  // Department data with complete details
  const departments = [
    {
      name: "School",
      description:
        "Overseeing literacy and education programs, managing school outreach and student mentorship programs.",
      icon: "fas fa-graduation-cap",
      color: "from-blue-500 to-indigo-500",
      members: coordinators.filter((c) => c.position.includes("School")),
      details: {
        mission:
          "To promote education and literacy in underserved communities through innovative teaching methods and mentorship.",
        activities: [
          {
            title: "Adult literacy programs",
            description:
              "Teaching basic literacy and numeracy to adults in rural areas.",
          },
          {
            title: "School mentorship",
            description:
              "Providing tutoring and mentorship to school children.",
          },
          {
            title: "Educational material distribution",
            description:
              "Distributing books, stationery, and other educational materials.",
          },
        ],
      },
    },
    {
      name: "Health Public Awareness",
      description:
        "Managing health camps and wellness programs, leading health awareness campaigns and medical outreach.",
      icon: "fas fa-stethoscope",
      color: "from-green-500 to-teal-500",
      members: coordinators.filter((c) => c.position.includes("Health")),
      details: {
        mission: `The Department of Health and Public Awareness aims to spread awareness about important health and social issues and help society. We work to empower those in need so that they can live a more comfortable life and make well-informed decisions. With our initiatives, we have managed to cover several health, employment, literacy, and sanitation issues in and around Pilani.\n
HPA believes in serving society. Over the years, we have established trustworthy relations with the people in and around the villages of Pilani. We aim to make every individual, irrespective of their gender or age, independent enough to lead an informed life.
`,
        activities: [
          {
            title: "Database Creation and Extensive Survey",
            description:
              "As part of this new initiative, a detailed database of beneficiaries will be developed for Hanumantpura, Poorvi Marg, and other prospective locations. This database will compile crucial information on population demographics, basic needs, existing challenges, and the community’s awareness of government schemes. The insights gathered through this extensive survey will help in designing and implementing future initiatives that are specifically tailored to address the unique needs of each area.",
          },
          {
            title: "Clothes Sorting/Distribution",
            description: `Building on the success of last year's efforts, HPA will once again collect and distribute old clothes and toys generously donated by students and faculty members. This initiative not only helps meet basic needs but also encourages sustainability by reducing wastage.
\n\nHPA volunteers carefully sort through the collected items, as well as those already in inventory, categorizing them into winter wear, summer wear, and unusable items. Usable clothes are neatly stored and later distributed in nearby villages and bastis, bringing comfort and smiles to those who need them most.
`,
          },
          {
            title: "Health Camp",
            description: `With the valuable support of medical professionals from MedC, HPA organises free health camps aimed at providing essential healthcare services to under-resourced communities. These camps will include general health checkups, where individuals can get their vital signs (such as blood pressure, heart rate, and temperature) monitored, along with basic screenings for common illnesses.

In addition to the checkups, general medications—such as pain relievers, vitamins, and treatments for minor infections—will be distributed free of cost. This initiative is especially focused on reaching individuals who have limited or no access to medical facilities. By offering these services, we aim to promote early detection of health issues, raise awareness about hygiene and wellness, and ensure that basic healthcare becomes accessible to everyone, regardless of their socioeconomic background.
`,
          },
          {
            title: "Adult Initiative",
            description: `HPA plans to conduct 2–3 skill-building initiatives specifically designed for older women in the nearby communities, with the goal of fostering self-reliance and enabling them to play a more active role in their families' growth and education.
These initiatives will be informed by a preliminary community survey that aims to identify the interests, existing skill levels, and needs of the women. Based on the survey findings, the programs may include training in areas such as tailoring, handicrafts, basic literacy, digital skills, or home-based entrepreneurship.
By equipping these women with practical and sustainable skills, the initiative seeks not only to improve their own financial independence and confidence but also to enable them to better support and educate their children. This ripple effect helps strengthen entire families and contributes to the long-term development of the community.
`,
          },
          {
            title: "Policy Documentation",
            description: `HPA is reviving a past initiative to compile and share information on useful government schemes and policies with the communities nearby. These documents will highlight benefits related to healthcare, education, employment, and welfare that are often underutilized due to a lack of awareness.
Our volunteers will simplify the language and format to ensure the information is easy to understand and accessible to everyone in the Pilani community. This effort aims to empower individuals to make use of the resources and support available to them.
`,
          },
          {
            title: "Health Blog",
            description: `An exciting initiative by HPA and D3, where we bring you insights, tips, and facts about health, wellness, and safety — because caring for yourself and those around you is where true service begins!`,
          },
          {
            title: "Lecture Series",
            description: `To promote holistic development and awareness among younger students, HPA will continue organising lecture series in collaboration with School to educate students about current and important issues related to health and sanitation.`,
          },
        ],
      },
    },
    {
      name: "Parisodh",
      description:
        "Leading environmental cleanup drives and sustainability projects, coordinating waste management and green initiatives.",
      icon: "fas fa-seedling",
      color: "from-green-600 to-lime-500",
      members: coordinators.filter((c) => c.position.includes("Parisodh")),
      details: {
        mission:
          "To promote environmental conservation and sustainability through community-driven initiatives.",
        activities: [
          {
            title: "Tree plantation drives",
            description: "Planting trees to improve the local environment.",
          },
          {
            title: "Waste segregation and recycling programs",
            description:
              "Promoting waste segregation and recycling to reduce landfill waste.",
          },
        ],
      },
    },
    {
      name: "Department of Sponsorship and Collaboration",
      description:
        "Managing partnerships and sponsorship initiatives, building strategic partnerships and collaboration opportunities.",
      icon: "fas fa-handshake",
      color: "from-indigo-500 to-purple-500",
      members: coordinators.filter((c) => c.position.includes("Sponsorship")),
      details: {
        mission:
          "To build sustainable partnerships and secure resources for NSS initiatives through strategic collaborations.",
        activities: [
          {
            title: "Corporate partnership development",
            description:
              "Developing partnerships with corporate organizations to secure funding and resources.",
          },
          {
            title: "Grant application and management",
            description:
              "Applying for and managing grants to fund NSS initiatives.",
          },
        ],
      },
    },
    {
      name: "Computer Literacy Programme",
      description:
        "Teaching digital skills and computer literacy to communities, developing digital education programs and training modules.",
      icon: "fas fa-laptop",
      color: "from-cyan-500 to-blue-500",
      members: coordinators.filter((c) => c.position.includes("Computer")),
      details: {
        mission:
          "To bridge the digital divide by providing computer education and digital literacy to underserved communities.",
        activities: [
          {
            title: "Basic computer training programs",
            description:
              "Providing basic computer training to children and adults.",
          },
          {
            title: "Digital literacy for adults",
            description:
              "Teaching adults how to use computers and the internet.",
          },
        ],
      },
    },
    {
      name: "Umang",
      description:
        "Organizing donation drives and resource distribution, coordinating community welfare and support programs.",
      icon: "fas fa-hands-helping",
      color: "from-orange-500 to-red-500",
      members: coordinators.filter((c) => c.position.includes("Umang")),
      details: {
        mission:
          "To provide essential resources and support to underprivileged communities through organized donation drives.",
        activities: [
          {
            title: "Clothing and food distribution drives",
            description:
              "Collecting and distributing clothing and food to those in need.",
          },
          {
            title: "Emergency relief operations",
            description:
              "Providing emergency relief during natural disasters and other crises.",
          },
        ],
      },
    },
    {
      name: "Department of Design and Development",
      description:
        "Creating visual content and design solutions for NSS initiatives, developing technical solutions and digital platforms.",
      icon: "fas fa-laptop-code",
      color: "from-pink-500 to-rose-500",
      members: coordinators.filter((c) => c.position.includes("Design")),
      details: {
        mission:
          "To enhance NSS's digital presence and create compelling visual content that amplifies our social impact message.",
        activities: [
          {
            title: "Website and mobile app development",
            description:
              "Developing and maintaining the NSS website and mobile app.",
          },
          {
            title: "Social media content creation",
            description: "Creating content for NSS's social media channels.",
          },
        ],
      },
    },
    {
      name: "Events",
      description:
        "Planning and organizing major NSS events and festivals, managing event logistics and coordination activities.",
      icon: "fas fa-calendar-alt",
      color: "from-purple-500 to-pink-500",
      members: coordinators.filter((c) => c.position.includes("Events")),

      details: {
        mission:
          "To create impactful events that raise social awareness and engage the community in meaningful activities.",
        activities: [
          {
            title: "Annual festivals and cultural events",
            description:
              "Organizing annual festivals and cultural events to promote social awareness.",
          },
          {
            title: "Awareness campaigns and workshops",
            description:
              "Organizing awareness campaigns and workshops on various social issues.",
          },
        ],
      },
    },
  ];

  if (isLoading) {
    return (
      <section
        id="activities"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="activities"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Departments</h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our specialized departments and their dedicated work in
            community service across various domains.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="card-hover cursor-pointer group h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i className={`${dept.icon} text-white text-xl`}></i>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {dept.name}
                      </h4>
                      <p
                        className="text-sm text-gray-600 line-clamp-3"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {dept.description}
                      </p>
                      <div className="mt-4">
                        <Badge variant="secondary" className="text-xs">
                          {dept.members.length} Coordinator
                          {dept.members.length !== 1 ? "s" : ""}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center`}
                      >
                        <i className={`${dept.icon} text-white text-lg`}></i>
                      </div>
                      {dept.name}
                    </DialogTitle>
                    <DialogDescription>{dept.description}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Mission
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {dept.details.mission}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Key Activities
                      </h3>
                      <div className="space-y-4">
                        {dept.details.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <i className="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {activity.title}
                              </h4>
                              <p className="text-gray-600">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {dept.members.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Department Coordinators
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {dept.members.map((member, idx) => (
                            <Card key={member.id} className="p-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-10 h-10 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center`}
                                >
                                  <i className="fas fa-user text-white text-sm"></i>
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray-900">
                                    {member.name}
                                  </h5>
                                  <p className="text-sm text-gray-600">
                                    {member.position}
                                  </p>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Impact
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                {IMPACT_STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
