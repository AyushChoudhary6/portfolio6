import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"]
    },
    {
      title: "Container & Orchestration",
      skills: ["Docker", "Kubernetes", "Docker Swarm", "Helm"]
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"]
    },
    {
      title: "CI/CD & DevOps",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"]
    },
    {
      title: "Monitoring & Security",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Vault"]
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "JavaScript", "Go"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to build robust, scalable infrastructure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:bg-gray-800 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
