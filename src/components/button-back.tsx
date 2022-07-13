import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ButtonBackProps {
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'; // Откуда-то взять эти значения
}

const ButtonBack = ({ color }: ButtonBackProps) => (
    <Button
        variant="text"
        color={color}
        href="/"
        startIcon={<ArrowBackIcon />}
        style={{ textTransform: 'capitalize' }}
    >
      Назад
    </Button>
);

export default ButtonBack;
