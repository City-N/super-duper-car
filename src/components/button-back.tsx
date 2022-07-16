import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ButtonBackProps {
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'; // Откуда-то взять эти значения
}

const ButtonBack = ({ color }: ButtonBackProps) => (
    <Link
        to="/"
        underline="none"
        component={RouterLink}
    >
        <Button
            variant="text"
            color={color}
            startIcon={<ArrowBackIcon />}
            style={{ textTransform: 'capitalize' }}
        >
            Назад
        </Button>
    </Link>
);

export default ButtonBack;
