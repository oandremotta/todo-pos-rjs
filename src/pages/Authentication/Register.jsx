import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
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
        padding: '2rem',
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Cadastro realizado com sucesso!', { autoClose: 3000 });
            navigate('/home');
        } catch (error) {
            toast.error('Falha ao cadastrar. Verifique seus dados e tente novamente.', { autoClose: 3000 });
            console.error('Erro ao cadastrar:', error.message);
        }
    };

    return (
        <div style={styles.root}>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={styles.paper}>
                    <Typography variant="h4">DoseCerta</Typography>
                    <Typography variant="h5">Registrar</Typography>
                    <form style={styles.form} onSubmit={handleRegister}>
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
                            label="Senha"
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
