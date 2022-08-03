/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
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
import { updateProfile, updateAvatar, getAvatar } from 'API/UserApi';
import { useAppSelector } from 'hooks/redux';
import { showUserData } from 'store/slices/GetUserSlice';
import { AVATAR_URL } from 'constants/constants';
import edit from '../../img/edit.svg';
import noavatar from '../../img/noavatar.svg';

interface IProfile {
    // eslint-disable-next-line camelcase
    first_name: string;
    // eslint-disable-next-line camelcase
    second_name: string;
    login: string;
    email: string;
    phone: string;
    // eslint-disable-next-line camelcase
    display_name: string;
    avatar: string;
}

const Profile = () => {
    const { data } = useAppSelector(showUserData);
    // const [avatar, setAvatar] = useState<string>('');

    // useEffect(() => {
    //     getAvatar(data.avatar).then(({ data }) => setAvatar(data));
    // });

    // console.log(JSON.stringify(avatar));

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            first_name: data.first_name,
            second_name: data.second_name,
            login: data.login,
            email: data.email,
            phone: data.phone,
            display_name: data.display_name,
            avatar: data.avatar,
        },
        onSubmit: (values: IProfile, { setSubmitting }) => {
            const formData = new FormData();
            formData.append('avatar', values.avatar);

            updateProfile(values);
            updateAvatar(formData)
                .then(() => setSubmitting(false))
                .catch(() => setSubmitting(false));
        },
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
                                padding: '40px 24px',
                            }}
                        >
                            <CardContent
                                sx={{
                                    padding: 0,
                                }}
                            >
                                <Box sx={{ width: '100%' }}>
                                    <Grid
                                        container
                                        rowSpacing={1}
                                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                    >
                                        <Grid item xs={6}>
                                            <Card
                                                sx={{
                                                    borderRadius: '32px',
                                                    padding: '40px 24px',
                                                    height: '100%',
                                                }}
                                            >
                                                <CardContent
                                                    sx={{
                                                        padding: 0,
                                                        height: '100%',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                position: 'relative',
                                                                overflow: 'hidden',
                                                                display: 'block',
                                                                cursor: 'pointer',
                                                                margin: 'auto',
                                                                width: 128,
                                                                height: 128,
                                                                borderRadius: 65,
                                                                ':hover:after': {
                                                                    position: 'absolute',
                                                                    zIndex: 1,
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    display: 'block',
                                                                    content: "''",
                                                                    backgroundColor:
                                                                        'rgba(0, 0, 0, 0.5)',
                                                                    backgroundImage: `url(${edit})`,
                                                                    backgroundRepeat:
                                                                        'no-repeat',
                                                                    backgroundPosition:
                                                                        'center',
                                                                    backgroundSize: 24,
                                                                    borderRadius: 65,
                                                                },
                                                            }}
                                                        >
                                                            <input
                                                                style={{
                                                                    overflow: 'hidden',
                                                                    width: 128,
                                                                    height: 128,
                                                                    zIndex: 2,
                                                                    cursor: 'pointer',
                                                                    position: 'absolute',
                                                                    left: 0,
                                                                    top: 0,
                                                                    opacity: 0,
                                                                }}
                                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                    formik.setFieldValue('avatar', event.target.files[0]);
                                                                }}
                                                                type="file"
                                                                id="avatar"
                                                                name="avatar"
                                                                accept="image/*"
                                                            />
                                                            <img
                                                                style={{
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: '100%',
                                                                    height: '100%',
                                                                }}
                                                                src={
                                                                    formik.values.avatar.length
                                                                        ? `https://ya-praktikum.tech/api/v2/resources/${formik.values.avatar}`
                                                                        : noavatar
                                                                }
                                                                alt="Аватар"
                                                            />
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h1" padding="0 0 32px 0">
                                                Привет, {formik.values.first_name} 🤘
                                            </Typography>
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
                                            />
                                            <TextField
                                                id="phone"
                                                label="Телефон"
                                                name="phone"
                                                variant="outlined"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                sx={{
                                                    paddingBottom: '16px',
                                                    width: '100%',
                                                }}
                                            />
                                            <TextField
                                                id="display_name"
                                                label="Имя в чате"
                                                name="display_name"
                                                variant="outlined"
                                                value={formik.values.display_name}
                                                onChange={formik.handleChange}
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
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
                                                                variant="button"
                                                                color={colors.white}
                                                                fontWeight="bold"
                                                            >
                                                                Сохранить!
                                                            </Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid container item xs={12}>
                                                        <Grid item>
                                                            <ArrowBackIcon
                                                                color="primary"
                                                                sx={{
                                                                    paddingRight:
                                                                        theme.spacing(1),
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <Link
                                                                to="/"
                                                                underline="none"
                                                                component={RouterLink}
                                                            >
                                                                <Typography variant="button">
                                                                    Назад
                                                                </Typography>
                                                            </Link>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
