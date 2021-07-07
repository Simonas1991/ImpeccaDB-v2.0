// libs
import React, { useContext } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { WorkersContext } from '../App';
import axios from 'axios';
import * as Yup from 'yup';
/* ------------------------------------------ */

// material-ui components
import { Container, makeStyles, Grid, TextField, Button, Typography, MenuItem, Box } from '@material-ui/core';
/* ------------------------------------------ */

// custom components
import TextError from './TextError'
/* ------------------------------------------ */

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    root: {
        margin: '0 auto',
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
        width: '30%',
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

// Yup validation
const validationSchema = Yup.object({
    name: Yup.string().required('Įveskite vardą'),
    surname: Yup.string().required('Įveskite pavardę'),
    email: Yup.string().email('Neteisingas el. pašto formatas'),
    employeeNr: Yup.string().required('Darbuotojo numeris privalomas').matches(/^(.*[^0-9]|)(1000|[1-9]\d{0,2})([^0-9].*|)$/, 'Neteisingas darbuotojo nr. formatas ( turi būti skaičius nuo 1 iki 1000)')
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
        formValues,
        postClick,
        setPostClick,
        setIsActive,
    } = workersContext;
    /* ------------------------------------------ */

    // formik onSubmit
    const onSubmit = async (values, onSubmitProps) => {
        if (isUpdating) {
            try {
                await axios.patch(`http://localhost:8080/workers/${updatingId}`, values)
                setIsUpdating(false)
                setIsActive(false)
            }
            catch (err) {
                console.log(err)
            }
        } else {
            try {
                await axios.post('http://localhost:8080/workers/', values)
                setPostClick(!postClick)
                onSubmitProps.resetForm()
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
        setIsActive(false)
        setIsUpdating(false)
    }
    /* ------------------------------------------ */

    const classes = useStyles();

    return (
        <Box p={3}>
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
                                        className={classes.textField}
                                        type="text"
                                        id='employeeNr'
                                        name='employeeNr'
                                        label="Darbuotojo nr."
                                        variant="outlined"
                                        value={props.values.employeeNr}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                    />
                                    <ErrorMessage name='employeeNr' component={TextError} />
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
                                {isUpdating ?
                                    <>
                                        <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                            <Button className={classes.button} variant="contained" color="secondary" onClick={deleteWorker}>
                                                <Typography>Ištrinti</Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                            <Button className={classes.button} variant="contained" color="secondary" onClick={cancelUpdate}>
                                                <Typography>Atšaukti</Typography>
                                            </Button>
                                        </Grid>
                                    </>
                                    :
                                    <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                        <Button className={classes.button} variant="contained" color="secondary" type='reset'>
                                            <Typography>Atšaukti</Typography>
                                        </Button>
                                    </Grid>
                                }
                                <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                    <Button className={classes.button} variant="contained" color="primary" type='submit'>
                                        <Typography>{isUpdating ? 'Keisti' : 'Pridėti'}</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Box>
    )
}

export default WorkerForm;