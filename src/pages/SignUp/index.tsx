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
import { Link as RouterLink, RouterProps, useHistory } from 'react-router-dom';
import theme from 'theme';
import type { ISignUp } from 'API/AuthApi';
import { signup } from 'API/AuthApi';
import * as yup from 'yup';
import {
    LOGIN_MSG,
    MAIL_MSG,
    PASSWORD_MSG,
    REGEX_LOGIN,
    REGEX_PASSWORD,
    REGEX_TEL,
    TEL_MSG,
    VALUE,
} from 'constants/constants';

const validationSchema = yup.object({
    first_name: yup.string().required(VALUE),
    second_name: yup.string().required(VALUE),
    login: yup
        .string()
        .required(VALUE)
        .min(3, 'Логин должен состоять минимум из 3 символов')
        .matches(new RegExp(REGEX_LOGIN), {
            excludeEmptyString: true,
            message: LOGIN_MSG,
        }),
    password: yup
        .string()
        .required(VALUE)
        .min(8, PASSWORD_MSG)
        .matches(new RegExp(REGEX_PASSWORD), {
            excludeEmptyString: true,
            message: PASSWORD_MSG,
        }),
    email: yup.string().email(MAIL_MSG).required(VALUE),
    phone: yup
        .string()
        .min(7, 'Телефон должен состоять минимум из 7 символов')
        .matches(new RegExp(REGEX_TEL), {
            excludeEmptyString: true,
            message: TEL_MSG,
        }),
});

const SignUpPage = () => {
    const history: RouterProps['history'] = useHistory();

    const formik = useFormik({
        initialValues: {
            first_name: '',
            second_name: '',
            login: '',
            email: '',
            password: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: ISignUp) =>
            signup(values).then((payload) => {
                if (payload.status === 200) {
                    history.push('/sign_in');
                }
            }),
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
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
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
                                <Typography variant="h1" padding="0 0 32px 0">
                                    Регистрация 🏎
                                </Typography>
                                <TextField
                                    id="first_name"
                                    label="Имя"
                                    name="first_name"
                                    variant="outlined"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    helperText={
                                        formik.touched.first_name &&
                                        formik.errors.first_name
                                    }
                                    error={
                                        Boolean(formik.touched.first_name) &&
                                        Boolean(formik.errors.first_name)
                                    }
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                />
                                <TextField
                                    id="second_name"
                                    label="Фамилия"
                                    name="second_name"
                                    variant="outlined"
                                    value={formik.values.second_name}
                                    onChange={formik.handleChange}
                                    helperText={
                                        formik.touched.second_name &&
                                        formik.errors.second_name
                                    }
                                    error={
                                        Boolean(formik.touched.second_name) &&
                                        Boolean(formik.errors.second_name)
                                    }
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                />
                                <TextField
                                    id="login"
                                    label="Логин"
                                    name="login"
                                    variant="outlined"
                                    value={formik.values.login}
                                    onChange={formik.handleChange}
                                    helperText={
                                        formik.touched.login && formik.errors.login
                                    }
                                    error={
                                        Boolean(formik.touched.login) &&
                                        Boolean(formik.errors.login)
                                    }
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
                                    }}
                                />
                                <TextField
                                    id="email"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    helperText={
                                        formik.touched.email && formik.errors.email
                                    }
                                    error={
                                        Boolean(formik.touched.email) &&
                                        Boolean(formik.errors.email)
                                    }
                                    sx={{
                                        paddingBottom: '16px',
                                        width: '100%',
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
                                    helperText={
                                        formik.touched.password && formik.errors.password
                                    }
                                    error={
                                        Boolean(formik.touched.password) &&
                                        Boolean(formik.errors.password)
                                    }
                                    sx={{
                                        width: '100%',
                                        paddingBottom: '16px',
                                    }}
                                />
                                <TextField
                                    id="phone"
                                    label="Телефон"
                                    name="phone"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.phone && formik.errors.phone
                                    }
                                    error={
                                        Boolean(formik.touched.phone) &&
                                        Boolean(formik.errors.phone)
                                    }
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    sx={{
                                        width: '100%',
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
                                            disabled={
                                                formik.isSubmitting || !formik.dirty
                                            }
                                            size="large"
                                            fullWidth
                                            sx={{
                                                borderRadius: '8px',
                                            }}
                                        >
                                            <Typography
                                                variant="button"
                                                color={colors.white}
                                                fontWeight="bold"
                                            >
                                                Погнали! 🤘
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <Grid item>
                                            <ArrowBackIcon
                                                color="primary"
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
                                                <Typography variant="button">
                                                    Вход
                                                </Typography>
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
