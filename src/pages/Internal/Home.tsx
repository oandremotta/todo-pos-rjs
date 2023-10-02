import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

function Home() {
    const [tasks, setTasks] = useState<Array<{
        id: number;
        title: string;
        time: string;
        completed: boolean;
    }>>([]);
    const [taskText, setTaskText] = useState('');
    const [taskTime, setTaskTime] = useState('09:00');
    const [taskCompleted, setTaskCompleted] = useState(false);

    const navigate = useNavigate();

    const addTask = () => {
        if (taskText.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                title: taskText,
                time: taskTime,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setTaskText('');
            setTaskTime('09:00');
            toast.success('Tarefa adicionada com sucesso!');
        }
    };

    const removeTask = (index: any) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        toast.warning('Tarefa removida com sucesso!');
    };

    const toggleTaskCompletion = (index: any) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
        toast.info(`Tarefa ${newTasks[index].completed ? 'concluída' : 'não concluída'}`);
    };

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            toast.info('Você foi desconectado com sucesso!');
            // Redirecione o usuário para a tela de login
            navigate('/login');
        } catch (error) {
            toast.error('Falha ao fazer logout. Tente novamente.');
        }
    };

    return (
        <Container maxWidth="sm">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Todo List</h2>
                <div>
                    <Link to="/profile">
                        <Button variant="outlined" color="primary">
                            <PersonIcon /> Perfil
                        </Button>
                    </Link>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleLogout}
                    >
                        <ExitToAppIcon /> Logout
                    </Button>
                </div>
            </div>
            <div>
                <TextField
                    label="Título da Tarefa"
                    variant="outlined"
                    fullWidth
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Horário"
                    type="time"
                    variant="outlined"
                    fullWidth
                    value={taskTime}
                    onChange={(e) => setTaskTime(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={addTask}
                >
                    Adicionar Tarefa
                </Button>
            </div>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={task.id}>
                        <ListItemText
                            primary={task.title}
                            secondary={`Horário: ${task.time} - ${task.completed ? 'Concluída' : 'Não Concluída'
                                }`}
                        />
                        <Button onClick={() => toggleTaskCompletion(index)}>
                            {task.completed ? 'Desfazer' : 'Concluir'}
                        </Button>
                        <Button onClick={() => removeTask(index)}>Remover</Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Home;
