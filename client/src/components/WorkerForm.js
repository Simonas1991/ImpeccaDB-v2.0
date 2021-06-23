// libs
import React, { useContext } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { WorkersContext } from '../App';
import axios from 'axios';
import * as Yup from 'yup';

// material-ui components
import { Container, makeStyles, Grid, TextField, Button, Typography, MenuItem } from '@material-ui/core';
/* ------------------------------------------ */

// custom components
import TextError from './TextError'
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    root: {
        margin: '100px auto',
        padding: '5%',
        backgroundColor: '#E8EAE3',
        borderRadius: '8px'
    },
    textField: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: '4px'
    },
    button: {
        width: '100%',
        borderRadius: '10px'
    },
    btnDelCan: {
        width: '25%',
        borderRadius: '10px',
        margin: '20px auto',
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

// Yup validation
const validationSchema = Yup.object({
    name: Yup.string().required('Įveskite vardą'),
    surname: Yup.string().required('Įveskite pavardę'),
    email: Yup.string().email('Neteisingas el. pašto formatas')
})
/* ------------------------------------------ */

const WorkerForm = () => {
    // hooks
    // - useContext
    const workersContext = useContext(WorkersContext);
    let {
        isUpdating,
        setIsUpdating,
        updatingId,
        initialValues,
        setInitialValues,
        formValues,
        postClick,
        setPostClick
    } = workersContext;
    /* ------------------------------------------ */

    // formik onSubmit
    const onSubmit = async (values) => {
        if (isUpdating) {
            try {
                await axios.patch(`http://localhost:8080/workers/${updatingId}`, values)
                setIsUpdating(false)
            }
            catch (err) {
                console.log(err)
            }
        } else {
            try {
                await axios.post('http://localhost:8080/workers/', values)
                setPostClick(!postClick)
            }
            catch (err) {
                console.log(err)
            }
        }
    }
    /* ------------------------------------------ */

    // functions
    const deleteWorker = async () => {
        try {
            await axios.delete(`http://localhost:8080/workers/${updatingId}`)
            setIsUpdating(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    const cancelUpdate = () => {
        setIsUpdating(false)
        setInitialValues(initialValues)
        console.log()
    }
    /* ------------------------------------------ */


    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Formik
                initialValues={isUpdating ? formValues : initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {props => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='name'
                                    name='name'
                                    label="Vardas"
                                    variant="outlined"
                                    value={props.values.name}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                />
                                <ErrorMessage name='name' component={TextError} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='surname'
                                    name='surname'
                                    label="Pavardė"
                                    variant="outlined"
                                    value={props.values.surname}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                />
                                <ErrorMessage name='surname' component={TextError} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='address'
                                    name='address'
                                    label="Adresas"
                                    variant="outlined"
                                    value={props.values.address}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='personalCode'
                                    name='personalCode'
                                    label="Asmens kodas"
                                    variant="outlined"
                                    value={props.values.personalCode}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='email'
                                    name='email'
                                    label="El. paštas"
                                    variant="outlined"
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                />
                                <ErrorMessage name='email' component={TextError} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textField}
                                    type="text"
                                    id='number'
                                    name='number'
                                    label="Tel. nr."
                                    variant="outlined"
                                    value={props.values.number}
                                    onChange={props.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="type"
                                    name='type'
                                    select
                                    className={classes.select}
                                    value={props.values.type}
                                    onChange={props.handleChange}
                                    label="Pasirinkite statusą"
                                >
                                    <MenuItem name='nostaus' value='nostatus'>
                                        <Typography>Be statuso</Typography>
                                    </MenuItem>
                                    <MenuItem name='work' value='work'>
                                        <Typography>Komandiruotė</Typography>
                                    </MenuItem>
                                    <MenuItem name='holiday' value='holiday'>
                                        <Typography>Neapmokamos atostogos</Typography>
                                    </MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Button className={classes.button} variant="contained" color="primary" type='submit'>
                                    <Typography>{isUpdating ? 'Keisti' : 'Pridėti'}</Typography>
                                </Button>
                            </Grid>
                            {isUpdating ?
                                <>
                                    <Button className={classes.btnDelCan} variant="contained" color="secondary" onClick={cancelUpdate}>
                                        <Typography>Atšaukti</Typography>
                                    </Button>
                                    <Button className={classes.btnDelCan} variant="contained" color="secondary" onClick={deleteWorker}>
                                        <Typography>Ištrinti</Typography>
                                    </Button>
                                </>
                                :
                                null
                            }
                        </Grid>
                    </Form>
                )}

            </Formik>
        </Container>
    )
}

export default WorkerForm;