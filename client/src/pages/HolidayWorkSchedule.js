// libs
import React from 'react';
/* ------------------------------------------ */

// components
import HolidayWorkTable from '../components/HolidayWorkTable';
import HolidayWorkForm from '../components/HolidayWorkForm';
/* ------------------------------------------ */

const HolidayWorkSchedule = () => {
    return (
        <div>
            <HolidayWorkTable />
            <HolidayWorkForm />
        </div>
    )
}

export default HolidayWorkSchedule;
