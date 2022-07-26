import React from 'react';
import ButtonBack from 'components/BackButton';
import PageTitle from 'components/PageTitle';
import LeaderTable from 'components/LeaderBoard';
import { Box } from '@mui/material';

const LeaderPage = () => (
    <Box sx={{ p: 4 }}>
        <ButtonBack color="secondary" />
        <PageTitle title="Наши лидеры 🏆" />
        <LeaderTable />
    </Box>
);

export default LeaderPage;
