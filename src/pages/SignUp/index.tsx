import React from 'react';
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
} from '@mui/material';
import { useFormik } from 'formik';
import colors from 'colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import theme from 'theme';
import { ISignUp, signup } from 'API/auth-api';

const SignUpPage = () => {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            second_name: '',
            login: '',
            email: '',
            password: '',
            phone: '',
        },
        onSubmit: (values: ISignUp, { setSubmitting, resetForm }) => signup(values)
            .then(() => resetForm())
            .then(() => setSubmitting(false))
            .catch(() => setSubmitting(false)),
    });

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
                                <Typography variant='h1' padding="0 0 32px 0">Регистрация 🏎</Typography>
                                <TextField
                                    id="first_name"
                                    label="Имя"
                                    name="first_name"
                                    variant="outlined"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}
                                />
                                <TextField
                                    id="second_name"
                                    label="Фамилия"
                                    name="second_name"
                                    variant="outlined"
                                    value={formik.values.second_name}
                                    onChange={formik.handleChange}
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}
                                />
                                <TextField
                                    id="login"
                                    label="Логин"
                                    name="login"
                                    variant="outlined"
                                    value={formik.values.login}
                                    onChange={formik.handleChange}
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}
                                />
                                <TextField
                                    id="email"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}
                                />
                                <TextField
                                    id="password"
                                    label="Пароль"
                                    name="password"
                                    variant="outlined"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    sx={{
                                        width: '100%',
                                        paddingBottom: '16px',
                                    }}
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off',
                                        },

                                    }}
                                />
                                <TextField
                                    id="phone"
                                    label="Телефон"
                                    name="phone"
                                    variant="outlined"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    sx={{
                                        width: '100%',
                                    }}
                                    inputProps={{
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}
                                />
                            </CardContent>
                            <CardActions
                                sx={{
                                    padding: '32px 0',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
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
                                                Погнали! 🤘
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <Grid item>
                                            <ArrowBackIcon
                                                color='primary'
                                                sx={{
                                                    paddingRight: theme.spacing(1),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Link
                                                to="/sign_in"
                                                underline="none"
                                                component={RouterLink}
                                            >
                                                <Typography variant='button'>Вход</Typography>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUpPage;
