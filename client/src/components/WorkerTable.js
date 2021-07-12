// libs
import React, { useContext } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// material-ui components
import { Button, makeStyles, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Box } from '@material-ui/core';
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
        position: 'sticky',
        backgroundColor: "#E8EAE3",
        top: '-1px',
        zIndex: 1
    },
    active: {
        backgroundColor: '#E8EAE3'
    }
}));
/* ------------------------------------------ */

function WorkerTable() {
    // hooks
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
        <Box pt={6}>
            <TableContainer component={Paper} style={{ margin: '0 auto', maxWidth: '1250px', maxHeight: '600px' }}>
                <Table>
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell align="center">Nr.</TableCell>
                            <TableCell align="center">Vardas</TableCell>
                            <TableCell align="center">Pavardė</TableCell>
                            <TableCell align="center">Asmens kodas</TableCell>
                            <TableCell align="center">Adresas</TableCell>
                            <TableCell align="center">Tel. nr.</TableCell>
                            <TableCell align="center">El. paštas</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workers.map((worker) => (
                            <TableRow hover={true} key={worker._id} className={updatingId === worker._id && isActive ? classes.active : null}>
                                <TableCell align="center">{worker.employeeNr}</TableCell>
                                <TableCell align="center">{worker.name}</TableCell>
                                <TableCell align="center">{worker.surname}</TableCell>
                                <TableCell align="center">{worker.personalCode}</TableCell>
                                <TableCell align="center">{worker.address}</TableCell>
                                <TableCell align="center">{worker.number}</TableCell>
                                <TableCell align="center">{worker.email}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        component='span'
                                        className={classes.button}
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleUpdate(worker)}>
                                        Keisti
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default WorkerTable;