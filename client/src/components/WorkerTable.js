// libs
import React, { useContext } from 'react';
import { WorkersContext } from '../App';
/* ------------------------------------------ */

// material-ui components
import { Checkbox, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
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
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        workers
    } = workersContext;
    /* ------------------------------------------ */

    // useStyles
    const classes = useStyles();
    /* ------------------------------------------ */

    // table rows
    const rows = workers
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
                        {rows.map((row) => {
                            return (
                                <TableRow hover tabIndex={-1} key={row._id} >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                    <Checkbox component='td' style={{padding: '16px 0'}} key={row._id} />
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
