// libs
import React, { useContext } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// bootstrap
import Table from 'react-bootstrap/Table';
/* ------------------------------------------ */

// material-ui components
import { makeStyles, Typography, Box, Button, Container } from '@material-ui/core';
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#E8EAE3'
    },
    container: {
        padding: '2rem 12rem',
    },
    table: {
        marginBottom: '50px'
    }
}));
/* ------------------------------------------ */

const HolidayWorkTable = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers,
        setFormValues,
        setIsUpdating,
        isUpdating,
        setUpdatingId
    } = workersContext;
    /* ------------------------------------------ */

    // variables
    let holidayArray = workers.filter(worker => worker.type === 'holiday');
    let workArray = workers.filter(worker => worker.type === 'work');
    let noStatusArray = workers.filter(worker => worker.type === 'nostatus');
    /* ------------------------------------------ */

    // functions
    const mapArr = (arr, tableHeader) => {
        return (
            <Container maxWidth='lg'>
                <Typography gutterBottom={true} align='center' variant='h6'>{tableHeader}</Typography>
                <Table bordered hover size="sm" className={classes.table} >
                    <thead className={classes.header}>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Asmens kodas</th>
                            <th>Nuo</th>
                            <th>Iki</th>
                            <th></th>
                        </tr>
                    </thead>
                    {arr.map((worker) => (
                        <tbody key={worker._id}>
                            <tr>
                                <td width='20%'>{worker.name}</td>
                                <td width='20%'>{worker.surname}</td>
                                <td width='20%'>{worker.personalCode}</td>
                                <td width='20%'>{worker.from}</td>
                                <td width='20%'>{worker.to}</td>
                                <td width='20%'>
                                    <Button
                                        component='span'
                                        className={classes.button}
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleUpdate(worker)}
                                    >
                                        Keisti
                                    </Button>
                                </td>
                            </tr>
                        </tbody>

                    ))}
                </Table >
            </Container>
        )
    }

    const handleUpdate = (worker) => {
        setFormValues({
            name: worker.name,
            surname: worker.surname,
            personalCode: worker.personalCode,
            address: worker.address,
            number: worker.number,
            email: worker.email,
            type: worker.type,
            from: worker.from,
            to: worker.to
        })
        setIsUpdating(!isUpdating)
        setUpdatingId(worker._id)
    }
    /* ------------------------------------------ */

    /* ------------------------------------------ */

    const classes = useStyles();
    console.log(workers)
    return (
        <Box className={classes.container}>
            {mapArr(holidayArray, 'Atostogose')}
            {mapArr(workArray, 'Komandiruotėse')}
            {mapArr(noStatusArray, 'Be statuso')}
        </Box>
    )
}

export default HolidayWorkTable;
