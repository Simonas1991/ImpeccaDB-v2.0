// libs
import React, { useContext } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// material-ui components
import { Button, makeStyles } from '@material-ui/core';
/* ------------------------------------------ */

// bootstrap
import Table from 'react-bootstrap/Table';
/* ------------------------------------------ */


// material-ui makeStyles
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#E8EAE3',
        borderRadius: '8px',
    }

}));
/* ------------------------------------------ */


export default function BasicTable() {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers,
        isUpdating,
        setIsUpdating,
        updatingId,
        setUpdatingId,
        checkBox,
        setCheckBox,
        setInitialValues
    } = workersContext;
    /* ------------------------------------------ */

    // functions
    const handleUpdate = (e, worker) => {
        setUpdatingId(worker._id)
        console.log(updatingId)
        setInitialValues(worker)
        setCheckBox(!checkBox)
        setIsUpdating(!isUpdating)
    }
    /* ------------------------------------------ */

    const classes = useStyles();

    return (
        <Table striped bordered hover size="md" style={{ margin: '100px auto', width: '75vw' }}>
            <thead className="thead-dark">
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
                    <tr key={worker._id}>
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
                                onClick={(e) => handleUpdate(e, worker)}>
                                Keisti
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}