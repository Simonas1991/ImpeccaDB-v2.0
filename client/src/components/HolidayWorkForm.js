// libs
import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { WorkersContext } from '../App';
import axios from 'axios';
/* ------------------------------------------ */

// material-ui components
import { Container, makeStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    root: {
        margin: '50px auto',
        padding: '2%',
        backgroundColor: '#E8EAE3',
        borderRadius: '8px'
    },
    textField: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: '4px'
    },
    button: {
        margin: 'auto',
        width: '20%',
        borderRadius: '10px',
        border: 'none !important',
        outline: 'none !important'
    },
    select: {
        width: '100%',
        backgroundColor: '#F7F7F7'
    },
    error: {
        color: '#F44336'
    }
}));
/* ------------------------------------------ */

const HolidayWorkForm = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        isUpdating,
        setIsUpdating,
        updatingId,
        initialValues,
        formValues,
        postClick,
        setPostClick
    } = workersContext;
    /* ------------------------------------------ */

    // formik onSubmit
    const onSubmit = async (values) => {
        try {
            await axios.patch(`http://localhost:8080/workers/${updatingId}`, values)
            setIsUpdating(false)
        }
        catch (err) {
            console.log(err)
        }
    }
    /* ------------------------------------------ */

    // functions
    const cancelUpdate = () => {
        setIsUpdating(false)
    }
    /* ------------------------------------------ */

    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.root}>
            <Formik
                initialValues={isUpdating ? formValues : initialValues}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {props => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    disabled
                                    type="text"
                                    id='name'
                                    name='name'
                                    label="Vardas"
                                    variant="outlined"
                                    value={props.values.name}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    disabled
                                    type="text"
                                    id='surname'
                                    name='surname'
                                    label="Pavardė"
                                    variant="outlined"
                                    value={props.values.surname}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='from'
                                    name='from'
                                    label="Nuo"
                                    variant="outlined"
                                    value={props.values.from}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='to'
                                    name='to'
                                    label="Iki"
                                    variant="outlined"
                                    value={props.values.to}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex' }}>
                                <Button className={classes.button} variant="contained" color="secondary" onClick={cancelUpdate}>
                                    <Typography>Atšaukti</Typography>
                                </Button>
                                <Button className={classes.button} variant="contained" color="primary" type='submit'>
                                    <Typography>Keisti</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default HolidayWorkForm
