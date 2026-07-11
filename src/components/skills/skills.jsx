import React from 'react';
import Frontend from './frontend';
import Backend from './backend';

const Skills = () => {
    return (
        <section className="section" id='skill'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="container grid grid-cols-[repeat(2,minmax(350px,1fr))] gap-x-8 gap-y-20 justify-center max-[992px]:grid-cols-1 max-[992px]:gap-y-12">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills
