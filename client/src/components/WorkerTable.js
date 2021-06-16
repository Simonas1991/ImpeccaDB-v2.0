// libs
import React, { useContext, useState } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// material-ui components
import { Checkbox , makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: '100px auto'
    },
    container: {
        maxHeight: 440,
    },
});
/* ------------------------------------------ */

// creating columns (table header)
const columns = [
    { id: 'name', label: 'Vardas' },
    { id: 'surname', label: 'Pavardė' },
    { id: 'personalCode', label: 'Asmens kodas' },
    { id: 'number', label: 'Tel. nr.' },
    { id: 'email', label: 'El. paštas' },
    { id: 'address', label: 'Adresas' },
];
/* ------------------------------------------ */

const WorkerTable = () => {
    // hooks
    // - useState
    const [checkBox, setcheckBox] = useState(false)

    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers,
        isUpdating,
        setIsUpdating,
        setUpdatingId
    } = workersContext;
    /* ------------------------------------------ */

    // functions
    const handleSelect = (e) => {
        setUpdatingId(e.target.value)
        setcheckBox(!checkBox)
        setIsUpdating(!isUpdating)
    }
    /* ------------------------------------------ */


    // useStyles
    const classes = useStyles();
    /* ------------------------------------------ */

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workers.map((worker) => {
                            return (
                                <TableRow hover tabIndex={-1} key={worker._id} >
                                    {columns.map((column) => {
                                        const value = worker[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                    <Checkbox disabled={checkBox} onClick={(e) => handleSelect(e)} component='td' style={{ padding: '16px 0' }} value={worker._id} />
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default WorkerTable
