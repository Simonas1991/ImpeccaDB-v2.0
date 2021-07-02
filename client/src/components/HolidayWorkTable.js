// libs
import React, { useContext } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// bootstrap
import Table from 'react-bootstrap/Table';
/* ------------------------------------------ */

// material-ui components
import { makeStyles, Typography, Box, Button, Container, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    
    tableHeader: {
        fontFamily: 'Poppins',
        position: 'sticky',
        backgroundColor: "#E8EAE3",
        top: '-1px',
        zIndex: 1
    },
    container: {
        padding: '2rem 12rem',
    },
    table: {
        marginBottom: '50px'
    },
    green: {
        backgroundColor: '#66cca4'
    },
    red: {
        backgroundColor: '#d70024'
    },
    active: {
        backgroundColor: '#E8EAE3'
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
        setUpdatingId,
        updatingId,
        isActive,
        setIsActive
    } = workersContext;
    /* ------------------------------------------ */

    // variables
    let holidayArray = workers.filter(worker => worker.type === 'holiday');
    let workArray = workers.filter(worker => worker.type === 'work');
    let noStatusArray = workers.filter(worker => worker.type === 'nostatus');
    /* ------------------------------------------ */

    // functions
    const dateChecker = (string) => {
        const dateTo = new Date(string);
        const dateNow = new Date()
        if (dateTo > dateNow) return true
        else if (dateTo <= dateNow) return false
    }

    const mapArr = (arr, header) => {
        return (
            <>
                <Typography gutterBottom={true} align='center' variant='h6' className={classes.header}>{header}</Typography>
                <TableContainer component={Paper} style={{ margin: '0 auto 100px', maxWidth: '1250px', maxHeight: '500px' }}>
                    <Table>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                <TableCell align="center">Vardas</TableCell>
                                <TableCell align="center">Pavardė</TableCell>
                                <TableCell align="center">Asmens kodas</TableCell>
                                <TableCell align="center">Nuo</TableCell>
                                <TableCell align="center">Iki</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {arr.map((worker) => (
                                <TableRow hover={true} key={worker._id} className={updatingId === worker._id && isActive ? classes.active : null}>
                                    <TableCell align="center">{worker.name}</TableCell>
                                    <TableCell align="center">{worker.surname}</TableCell>
                                    <TableCell align="center">{worker.personalCode}</TableCell>
                                    <TableCell align="center">{worker.from}</TableCell>
                                    <TableCell align="center" className={dateChecker(worker.to) ? classes.green : classes.red}>{worker.to}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            component='span'
                                            className={classes.button}
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleUpdate(worker)}
                                        >
                                            Keisti
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
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
        setIsActive(!isActive)
    }
    /* ------------------------------------------ */

    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {mapArr(holidayArray, 'Atostogose')}
            {mapArr(workArray, 'Komandiruotėse')}
            <Container maxWidth='md'>
                <Typography gutterBottom={true} align='center' variant='h6' className={classes.header}>Be statuso</Typography>
                <TableContainer component={Paper} style={{ margin: '0 auto 100px', maxWidth: '1250px', maxHeight: '500px' }}>
                    <Table>
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                <TableCell align="center">Vardas</TableCell>
                                <TableCell align="center">Pavardė</TableCell>
                                <TableCell align="center">Asmens kodas</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {noStatusArray.map((worker) => (
                                <TableRow hover={true} key={worker._id} className={updatingId === worker._id && isActive ? classes.active : null}>
                                    <TableCell align="center">{worker.name}</TableCell>
                                    <TableCell align="center">{worker.surname}</TableCell>
                                    <TableCell align="center">{worker.personalCode}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
        </Box>
    )
}

export default HolidayWorkTable;
