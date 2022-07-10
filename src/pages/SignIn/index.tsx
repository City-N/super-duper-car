import React, { FC } from 'react';
import {
    Button,
    Container,
    Card,
    CardActions,
    CardContent,
    InputLabel,
    TextField,
    Typography,
} from '@mui/material';
import { API_URL } from '../../constants';
import { useFormik } from 'formik';
import colors from 'colors';

interface ISignIn {
    login: string;
    password: string;
}

const SignInPage: FC<{}> = () => {
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


    const login = async (data: ISignIn): Promise<void> => {
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
        <Container>
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
                            variant="outlined"
                            value={formik.values.login}
                            onChange={formik.handleChange}
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
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={formik.isSubmitting}
                            sx={{
                                borderRadius: '8px',
                            }}
                        >
                            <Typography
                                variant='button'
                                color={ colors.white }
                                fontWeight='bold'
                            >
                                Войти
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Container>
    );
};

export default SignInPage;
