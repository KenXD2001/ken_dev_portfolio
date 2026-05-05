import React from 'react'

const WorkItems = ({ item }) => {
    return (
        <div className='work__card'>
            <img src={item.image} alt={`Screenshot of ${item.title}`} className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <a href="#" className="work__button" aria-label={`View demo for ${item.title}`}>
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorkItems
