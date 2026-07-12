import React, { useState } from 'react'
import WorkItems from './workItems';
import { projectsData as projectData, projectsNav as projectNav } from './data';

const Works = () => {
    const [item, setItem] = useState({ name: "all" });

    const projects = item.name === "all"
        ? projectData
        : projectData.filter((project) => project.category === item.name);

    return (
        <div>
            <div className="flex justify-center gap-3 mb-12 flex-wrap max-[768px]:gap-2">
                {projectNav.map((nav, index) => (
                    <span
                        key={index}
                        className={`hoverable text-sm capitalize px-4 py-2 rounded-full cursor-pointer transition-all duration-200 font-medium ${item.name === nav.name ? "active-work pop" : "text-muted-foreground bg-card border border-border hover:border-primary/40 hover:text-foreground"}`}
                        onClick={() => setItem({ name: nav.name })}
                    >
                        {nav.name}
                    </span>
                ))}
            </div>

            <div key={item.name} className="container grid grid-cols-[repeat(3,minmax(250px,1fr))] gap-x-8 gap-y-20 max-[992px]:grid-cols-[repeat(2,minmax(250px,1fr))] max-[576px]:grid-cols-1 max-[576px]:gap-y-14">
                {projects.map((project, index) => (
                    <div key={project.id} className="animate-in slide-up-fade" style={{ animationDelay: `${index * 0.08}s` }}>
                        <WorkItems item={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works
