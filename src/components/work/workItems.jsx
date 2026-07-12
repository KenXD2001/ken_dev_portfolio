import React from 'react'

const WorkItems = ({ item }) => {
    const { category, image, title, description, demo, github } = item;

    return (
        <div className="card px-6 pt-6 pb-8 max-[576px]:px-5">
            <div className="relative rounded-[1rem] overflow-hidden mb-5 group">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-3 left-3 text-[0.625rem] font-medium uppercase tracking-wider bg-background/80 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full">
                    {category}
                </span>
            </div>

            <h3 className="text-sm font-medium mb-2">{title}</h3>
            <span className="text-xs text-muted-foreground leading-[1.6] block mb-5">{description}</span>

            <div className="flex gap-2">
                {demo && (
                    <a
                        href={demo}
                        className="hoverable button--small bg-primary text-primary-foreground"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bx-link-external text-sm"></i> Demo
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        className="hoverable button--small bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-github text-sm"></i> GitHub
                    </a>
                )}
            </div>
        </div>
    )
}

export default WorkItems
