import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const NotFoundCover = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>お探しのページは存在しません。</Typography>
            <Button variant='contained'>ホームに戻る</Button>
          </Grid>
          <Grid xs={6}>
            <img
              // eslint-disable-next-line no-undef
              src={process.env.PUBLIC_URL + '/assets/images/error-2129569__340.jpg'}
              alt=''
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFoundCover;
