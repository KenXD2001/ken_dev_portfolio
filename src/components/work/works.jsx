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
            <div className="flex justify-center gap-8 mb-12 max-[768px]:gap-5">
                {projectNav.map((nav, index) => (
                    <span
                        key={index}
                        className={`text-sm text-muted-foreground cursor-pointer px-3 py-1 rounded-lg transition-all duration-200 ${item.name === nav.name ? "active-work" : "hover:bg-primary/10"}`}
                        onClick={() => setItem({ name: nav.name })}
                    >
                        {nav.name}
                    </span>
                ))}
            </div>

            <div className="container grid grid-cols-[repeat(3,minmax(250px,1fr))] gap-x-8 gap-y-20 max-[992px]:grid-cols-[repeat(2,minmax(250px,1fr))] max-[576px]:grid-cols-1 max-[576px]:gap-y-14">
                {projects.map((project, index) => (
                    <WorkItems item={project} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Works
