import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

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
    signUpButton: {
        marginTop: '1rem',
    },
};

function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui
    };

    return (
        <div style={styles.root}>

            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={styles.paper}>
                    <Typography variant="h4">DoseCerta</Typography>
                    <Typography variant="h5">Login</Typography>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <Link to="/home">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={styles.submit}
                            >
                                Login
                            </Button>
                        </Link>
                    </form>
                    {/* Use o componente Link para criar o link para /register */}
                    <Link to="/register">
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            style={styles.signUpButton}
                        >
                            Cadastro
                        </Button>
                    </Link>
                </Paper>
            </Container>
        </div>
    );
}

export default Login;
