// libs
import React, { useContext, useState } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// material-ui components
import { Button, makeStyles } from '@material-ui/core';
/* ------------------------------------------ */

// bootstrap
import Table from 'react-bootstrap/Table';
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: '#fff',
        borderRadius: '8px'
    },
    header: {
        backgroundColor: '#E8EAE3'
    },
    active: {
        backgroundColor: '#E8EAE3'
    }
}));
/* ------------------------------------------ */

function WorkerTable() {
    // hooks
    // - useState


    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers,
        isUpdating,
        setIsUpdating,
        setFormValues,
        setUpdatingId,
        updatingId,
        isActive,
        setIsActive
    } = workersContext;
    /* ------------------------------------------ */

    // functions
    const handleUpdate = (worker) => {
        setFormValues({
            name: worker.name,
            surname: worker.surname,
            personalCode: worker.personalCode,
            address: worker.address,
            number: worker.number,
            email: worker.email,
            type: worker.type,
        })
        setIsUpdating(!isUpdating)
        setUpdatingId(worker._id)
        setIsActive(!isActive)
    }
    /* ------------------------------------------ */

    const classes = useStyles();

    return (
        <Table bordered hover size="md" style={{ margin: '100px auto', width: '75vw', maxHeight: '800px', overflowX: 'scroll' }}>
            <thead className={classes.header}>
                <tr>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Asmens kodas</th>
                    <th>Adresas</th>
                    <th>Tel. nr.</th>
                    <th>El. paštas</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {workers.map(worker => (
                    <tr key={worker._id} className={updatingId === worker._id && isActive ? classes.active : null}>
                        <td>{worker.name}</td>
                        <td>{worker.surname}</td>
                        <td>{worker.personalCode}</td>
                        <td>{worker.address}</td>
                        <td>{worker.number}</td>
                        <td>{worker.email}</td>
                        <td>
                            <Button
                                component='span'
                                className={classes.button}
                                variant="outlined"
                                color="primary"
                                onClick={() => handleUpdate(worker)}>
                                Keisti
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default WorkerTable;