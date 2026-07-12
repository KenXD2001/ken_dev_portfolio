import React from 'react'

const skills = [
    { name: "Nest.JS", level: "Intermediate" },
    { name: "Express.JS", level: "Advanced" },
    { name: "Node.JS", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "FAST & REST", level: "Intermediate" },
    { name: "Postgres", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Linux", level: "Advanced" },
    { name: "DevOps", level: "Intermediate" },
];

const Backend = () => {
    return (
        <div className="group relative card px-8 py-8 max-[576px]:px-5 hoverable">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

            <h3 className="relative text-base font-semibold text-center mb-7">Backend & DevOps</h3>

            <div className="relative flex justify-center gap-x-16 max-[350px]:gap-x-8">
                <div className="grid items-start gap-4">
                    {skills.slice(0, 5).map((skill) => (
                        <SkillRow key={skill.name} {...skill} />
                    ))}
                </div>
                <div className="grid items-start gap-4">
                    {skills.slice(5).map((skill) => (
                        <SkillRow key={skill.name} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SkillRow = ({ name, level }) => (
    <div className="flex items-center gap-2.5">
        <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <i className="bx bx-badge-check text-sm text-primary"></i>
        </span>
        <div>
            <h4 className="text-sm font-medium leading-snug max-[350px]:text-xs">{name}</h4>
            <span className="text-[0.625rem] text-muted-foreground">{level}</span>
        </div>
    </div>
);

export default Backend
