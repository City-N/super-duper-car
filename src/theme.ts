import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

let theme = createTheme({
    palette: {
        primary: {
            main: '#56CCF2',
            light: '',
            dark: '',
            contrastText: '',
        },
        secondary: {
            main: '#F587A4',
            light: '',
            dark: '',
            contrastText: '',
        },
        success: {
            main: '#66bb6a',
            light: '#81c784',
            dark: '#388e3c',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
        },
        warning: {
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00',
        },
        info: {
            main: '#29b6f6',
            light: '#4fc3f7',
            dark: '#0288d1',
        },
    },
    typography: {
        fontSize: 17,
        h1: {
            fontSize: 46,
        },
        h2: {
            fontSize: 24,
        },
        button: {
            fontSize: 16,
        },
        body1: {
            fontSize: 17,
        },
        caption: {
            fontSize: 14,
        },
    },
    spacing: 8,
    shadows: [
        "none", 
        "0px 4px 30px rgba(108, 72, 0, 0.2)",
        ...Array<string>(23).fill('none') ,
    ] as Shadows,
});

theme = responsiveFontSizes(theme);

export default theme;
