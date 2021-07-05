// libs
import React from 'react';
/* ------------------------------------------ */

// components
import WorkerForm from '../components/WorkerForm';
import WorkerTable from '../components/WorkerTable';
/* ------------------------------------------ */

// components
import Hero from '../images/hero.jpg'
/* ------------------------------------------ */

const Workers = () => {
    return (
        <div style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <WorkerTable />
            <WorkerForm />
        </div>
    )
}

export default Workers
