import React from 'react'

const WorkItems = ({ item }) => {
    const { category, image, title, description, demo, github } = item;

    return (
        <div className="bg-card border border-border px-6 py-8 rounded-[1.75rem] shadow-[0_24px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_65px_rgba(0,0,0,0.1)] hover:border-border max-[576px]:px-5">
            <img src={image} alt={title} className="rounded-[1rem] mb-6" />

            <h3 className="text-sm font-medium mb-2">{title}</h3>
            <span className="text-xs text-muted-foreground leading-[1.6] block mb-2">{description}</span>
            <span className="inline-block text-[0.625rem] text-muted-foreground mb-4">{category}</span>

            <div className="flex gap-3">
                {demo && (
                    <a href={demo} className="text-xs text-foreground inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
                        <i className="bx bx-link-external"></i> Demo
                    </a>
                )}
                {github && (
                    <a href={github} className="text-xs text-foreground inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i> Github
                    </a>
                )}
            </div>
        </div>
    )
}

export default WorkItems
