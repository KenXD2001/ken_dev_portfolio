import React from 'react';
import "./skill.css";
import Frontend from './frontend';
import Backend from './backend';

const Skills = () => {
    return (
        <section className="skills section" id='skill'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills;
