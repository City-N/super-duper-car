import React from 'react';
import ButtonBack from 'components/BackButton';
import PageTitle from 'components/PageTitle';
import Forum from 'components/Forum';
import { Box } from '@mui/material';

const ForumPage = () => (
    <Box sx={{ p: 4 }}>
        <ButtonBack color="secondary" />
        <PageTitle title="Форумы 💻" />
        <Forum />
    </Box>
);

export default ForumPage;
