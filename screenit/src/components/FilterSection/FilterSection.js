import React from 'react';
import './style.css';



const FilterSection = ({ children }) => {



    return (
        <section className="filter">

            <div className="filter__content">
                {children}
            </div>

        </section>
    )
}

export default FilterSection;