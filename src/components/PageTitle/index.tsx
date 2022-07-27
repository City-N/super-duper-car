import React from 'react';
import Typography from '@mui/material/Typography';

interface PageTitleProps {
    title: string;
}

const PageTitle = ({ title }: PageTitleProps) => (
    <Typography variant='h1' padding="0 0 32px 0">{title}</Typography>
);

export default PageTitle;
