// libs
import React from 'react';
/* ------------------------------------------ */

// components
import WorkerForm from '../components/WorkerForm';
import WorkerTable from '../components/WorkerTable';

/* ------------------------------------------ */

const Workers = () => {
    return (
        <div>
            <WorkerTable />
            <WorkerForm />
        </div>
    )
}

export default Workers
