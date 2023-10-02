// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50', // Verde
        },
        secondary: {
            main: '#ff9800', // Laranja
        },
        error: {
            main: '#f44336', // Vermelho
        },
        success: {
            main: '#2196f3', // Azul
        },
        background: {
            default: '#f5f5f5', // Fundo cinza claro
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Fonte preferida para textos
        h1: {
            fontSize: '2.5rem', // Tamanho de cabeçalho grande
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem', // Tamanho de cabeçalho médio
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.5rem', // Tamanho de cabeçalho pequeno
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem', // Tamanho de texto normal
            lineHeight: 1.5,
        },
        button: {
            textTransform: 'none', // Transformação de texto em botões
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 8, // Borda arredondada em componentes
    },
    spacing: 8, // Espaçamento base entre elementos
});

export default theme;
