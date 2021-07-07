// libs
import React from 'react';
/* ------------------------------------------ */

// components
import HolidayWorkTable from '../components/HolidayWorkTable';
import HolidayWorkForm from '../components/HolidayWorkForm';
/* ------------------------------------------ */

// components
import Hero from '../images/hero.jpg'
/* ------------------------------------------ */

const HolidayWorkSchedule = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${Hero})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <HolidayWorkTable />
                <HolidayWorkForm />
            </div>
        </div>
    )
}

export default HolidayWorkSchedule;
