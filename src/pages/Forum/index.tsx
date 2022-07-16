import React from 'react';
import ButtonBack from 'components/button-back';
import PageTitle from 'components/page-title';
import Forum from 'components/forum';
import { Box } from '@mui/material';

const ForumPage = () => (
    <Box sx={{ p: 4 }}>
        <ButtonBack color="secondary" />
        <PageTitle title="Форумы 💻" />
        <Forum />
    </Box>
);

export default ForumPage;
