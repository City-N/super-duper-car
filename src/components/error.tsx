import React from 'react';
import ButtonBack from 'components/BackButton';
import { Container, Typography } from '@mui/material';

interface ErrorProps {
    image: string,
    text: string
}

const Error = ({ image, text }: ErrorProps) => (
    <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center',
    }}>
        <Container>
            <img src={image} style={{ marginBottom: '2rem' }} alt="Server Error" />
            <Typography align="center" variant="h2" sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '2rem' }} classes="error-title">
                { text }
            </Typography>
            <ButtonBack color="secondary" />
        </Container>
    </div>
);

export default Error;
