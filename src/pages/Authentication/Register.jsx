import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    paper: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: '1rem',
    },
    submit: {
        marginTop: '2rem',
    },
    backButton: {
        marginTop: '1rem',
    },
};

function Register() {
    const handleSubmit = (e) => {

    };

    return (
        <div style={styles.root}>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={styles.paper}>
                    <Typography variant="h4">DoseCerta</Typography>
                    <Typography variant="h5">Registrar</Typography>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Senha"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={styles.submit}
                        >
                            Registrar
                        </Button>
                    </form>
                    <Link to="/login">
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            style={styles.backButton}
                        >
                            Voltar
                        </Button>
                    </Link>
                </Paper>
            </Container>
        </div>
    );
}

export default Register;
