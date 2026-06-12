import { TEAM_POSITIONS } from "../lib/constants";
import { teamMembers } from "../lib/team";
import TeamMemberCard from "./TeamSection/TeamMemberCard";
import { Card, CardContent } from "./ui/card";

export function TeamSection() {
  const leadershipTeam = teamMembers.filter((member) =>
    [
      TEAM_POSITIONS.PRESIDENT,
      TEAM_POSITIONS.VICE_PRESIDENT,
      TEAM_POSITIONS.SECRETARY,
    ].includes(member.position as any)
  );

  const coordinators = teamMembers
    .filter((member) => member.position.includes("Coordinator"))
    .sort((a, b) => a.position.localeCompare(b.position));

  return (
    <section
      id="team"
      className="py-12 sm:py-16 lg:py-20 scroll-mt-20 #bdaeedff bg-[#bdaeedff] from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 gradient-bg mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-md lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Meet the dedicated team members who lead our community service
            initiatives and drive positive change.
          </p>
        </div>

        {/* Office Bearers */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 font-heading  mb-6 sm:mb-8">
            Office Bearers
          </h3>

          {leadershipTeam.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {leadershipTeam.map((member, index) => (
                  <TeamMemberCard
                    key={Math.random()}
                    member={member}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Department Coordinators */}
          {coordinators.length > 0 && (
            <div>
              <h4 className="text-lg  font-heading sm:text-xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
                Department Coordinators
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {coordinators.map((coordinator, index) => (
                  <TeamMemberCard
                    key={Math.random()}
                    member={coordinator}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
