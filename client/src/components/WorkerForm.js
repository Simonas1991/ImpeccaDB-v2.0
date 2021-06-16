// libs
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
/* ------------------------------------------ */

// components
import { Container, makeStyles, Grid, Button, TextField, MenuItem, Box, Typography } from '@material-ui/core';
/* ------------------------------------------ */

// makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '100px auto',
        padding: '5%',
        backgroundColor: '#E8EAE3',
        borderRadius: '8px'
    },
    textField: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        borderRadius: '4px'
    },
    button: {
        width: '100%',
        borderRadius: '10px'
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

// formik initial values
const initialValues = {
    name: '',
    surname: '',
    personalCode: '',
    address: '',
    number: '',
    email: '',
    type: ''
}
/* ------------------------------------------ */

// formik initial values
const onSubmit = (values) => {
    console.log('Form data: ', values)
}
/* ------------------------------------------ */

// Yup validation
const validationSchema = Yup.object({
    name: Yup.string().required('Įveskite vardą!'),
    surname: Yup.string().required('Įveskite pavardę!'),
})
/* ------------------------------------------ */

function App() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    const classes = useStyles();

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container maxWidth="md" className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textField}
                            id="name"
                            label="Vardas"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name ? <Box className={classes.error}>{formik.errors.name}</Box> : null}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textField}
                            id="surname"
                            label="Pavardė"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.surname}
                        />
                        {formik.errors.surname && formik.touched.surname ? <Box className={classes.error}>{formik.errors.surname}</Box> : null}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textField}
                            id="personalCode"
                            label="Asmens kodas"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.personalCode}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textField}
                            id="address"
                            label="Adresas"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textField}
                            id="number"
                            label="Tel. nr."
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.number}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textField}
                            id="email"
                            label="El. paštas"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="type"
                            name='type'
                            select
                            className={classes.select}
                            value={formik.values.type}
                            onChange={formik.handleChange}
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
                        <Button className={classes.button} variant="contained" color="secondary">
                            <Typography>Atšaukti</Typography>
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button className={classes.button} variant="contained" color="primary" type='submit'>
                            <Typography>Pridėti</Typography>
                        </Button>
                    </Grid>

                </Grid>
            </Container>
        </form>
    );
}

export default App;