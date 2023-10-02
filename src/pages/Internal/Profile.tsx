import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, User, updatePassword, onAuthStateChanged, signOut } from 'firebase/auth';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
    const [user, setUser] = useState<User | null>(null);
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleChangePassword = async () => {
        try {
            if (user) {
                const auth = getAuth();
                await updatePassword(auth.currentUser!, newPassword);
                toast.success('Senha atualizada com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao alterar senha:', error);
            toast.error('Erro ao atualizar a senha. Por favor, tente novamente.');
        }
    };

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Perfil de Usuário</h2>
                <div>
                    <Link to="/home">
                        <Button variant="outlined" color="primary">
                            Voltar
                        </Button>
                    </Link>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
            {user ? (
                <div>
                    <Typography variant="h6">Bem-vindo, {user.email}!</Typography>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h6">Alterar Senha</Typography>
                        <TextField
                            label="Nova Senha"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            style={{ marginBottom: '10px' }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleChangePassword}
                        >
                            Alterar Senha
                        </Button>
                    </div>
                </div>
            ) : (
                <Typography variant="h6">Usuário não autenticado</Typography>
            )}
        </Container>
    );
}

export default Profile;
