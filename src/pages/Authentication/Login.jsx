import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login realizado com sucesso!', { autoClose: 3000 });
            navigate('/home');
        } catch (error) {
            toast.error('Falha ao fazer login. Verifique suas credenciais.', { autoClose: 3000 });
            console.error('Erro ao fazer login:', error.message);
        }
    };

    return (
        <div style={styles.root}>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={styles.paper}>
                    <Typography variant="h4">DoseCerta</Typography>
                    <Typography variant="h5">Login</Typography>
                    <form style={styles.form} onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={styles.submit}
                        >
                            Login
                        </Button>
                    </form>
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
