import React, { FC, useState } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
    Typography,
    Box,
    Grid,
    Link,
    InputAdornment,
    IconButton,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { API_URL } from '../../constants';
import { useFormik } from 'formik';
import colors from 'colors';
import { Link as RouterLink } from 'react-router-dom';

interface ISignIn {
    login: string;
    password: string;
}

const SignInPage: FC<{}> = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: (values: ISignIn, { setSubmitting, resetForm }) =>
            login(values)
                .then(() => resetForm())
                .then(() => setSubmitting(false))
                .catch(() => setSubmitting(false)),
    });


    const login = (data: ISignIn): Promise<void> => {
        const currentURL = `${API_URL}/auth/signin`;

        return fetch(currentURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res: any): Promise<any> => res)
            // .then((payload) => setFormData({
            //     statusCode: payload.status,
            // }))
            .catch(err => console.log(err));
    };

    return (
        <Box>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <form onSubmit={formik.handleSubmit}>
                        <Card
                            sx={{
                                borderRadius: '32px',
                                maxWidth: '544px',
                                padding: '40px 24px',
                            }}
                        >
                            <CardContent
                                sx={{
                                    padding: 0,
                                }}
                            >
                                <Typography variant='h1' padding="0 0 32px 0">Поехали 🏎</Typography>
                                <TextField
                                    id="login"
                                    label="Логин"
                                    name="login"
                                    autoFocus
                                    variant="outlined"
                                    value={formik.values.login}
                                    onChange={formik.handleChange}
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        form: {
                                            autocomplete: 'off',
                                        },
                                    }}
                                />

                                <TextField
                                    id="password"
                                    label="Пароль"
                                    name="password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    sx={{
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        autocomplete: 'new-password',
                                        form: {
                                            autocomplete: 'off',
                                        },

                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    helperText={
                                        <Link
                                            to="/sign_up"
                                            underline="none"
                                            component={RouterLink}
                                        >
                                            <Typography variant='caption' color={colors.main}>
                                                У вас нет аккаунта ? Давайте зарегестрируемся!
                                            </Typography>
                                        </Link>
                                    }
                                />
                            </CardContent>
                            <CardActions
                                sx={{
                                    padding: '32px 0',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    disabled={formik.isSubmitting}
                                    size="large"
                                    fullWidth
                                    sx={{
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Typography
                                        variant='button'
                                        color={colors.white}
                                        fontWeight='bold'
                                    >
                                        Войти
                                    </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignInPage;
