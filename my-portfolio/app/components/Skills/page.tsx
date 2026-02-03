export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Frontend",
      gradient: "from-blue-600 to-cyan-500",
      skills: [
        { name: "HTML", img: "/skills/html.png" },
        { name: "CSS", img: "/skills/css.png" },
        { name: "Tailwind CSS", img: "/skills/tailwind.png" },
        { name: "JavaScript", img: "/skills/javascript.png" },
        { name: "React.js", img: "/skills/react.png" },
        { name: "Next.js", img: "/skills/next.png" },
      ],
    },
    {
      title: "Backend",
      gradient: "from-purple-600 to-pink-500",
      skills: [
        { name: "Node.js", img: "/skills/node.png" },
        { name: "REST API", img: "/skills/rest api.png" },
        { name: "GraphQL", img: "/skills/graphql.png" },
      ],
    },
    {
      title: "Tools & State",
      gradient: "from-emerald-600 to-green-500",
      skills: [
        { name: "Redux", img: "/skills/redux.png" },
        { name: "GitHub", img: "/skills/github.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 lg:px-20 bg-white"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Technical <span className="text-blue-600">Skills</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          I build modern, scalable web applications with a strong focus on clean
          UI, performance, and maintainable code. These are the technologies I
          use to create reliable, production-ready digital experiences.
        </p>
      </div>

      {/* Skill Groups */}
      <div className="grid gap-16">
        {skillGroups.map((group) => (
          <div key={group.title}>
            {/* Group Title */}
            <h3
              className={`mb-8 text-lg font-semibold tracking-wide
              bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}
            >
              {group.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    group rounded-2xl p-6
                    bg-gray-50
                    border border-gray-200
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-12 h-12 mb-4 object-contain
                      group-hover:scale-110 transition-transform"
                    />
                    <p className="text-sm font-semibold text-gray-800">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
