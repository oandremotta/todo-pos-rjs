import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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

    const addTask = () => {
        if (taskText.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                title: taskText,
                time: taskTime,
                completed: false, // Inicialmente, a tarefa não está concluída
            };
            setTasks([...tasks, newTask]);
            setTaskText('');
            setTaskTime('09:00');
        }
    };

    const removeTask = (index: any) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (index: any) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <Container maxWidth="sm">
            <h2>Todo List</h2>
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
            <Link to="/dashboard" style={{ marginTop: '20px' }}>
                <Button variant="outlined" color="primary" fullWidth>
                    Ir para o Dashboard
                </Button>
            </Link>
        </Container>
    );
}

export default Home;
