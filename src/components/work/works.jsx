import React, { useEffect, useState } from 'react'
import { projectsData } from './data'
import { projectsNav } from './data'
import WorkItems from './workItems'

const Works = () => {

    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (name, index) => {
        setItem({ name });
        setActive(index);
    }

    return (
        <div>
            <div className='work__filters'>
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={() => handleClick(item.name, index)}
                            className={`${active === index ? 'active-work' : ''} work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works
