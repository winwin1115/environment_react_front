import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const MainVisual = (prop) => {
  let { title } = prop;
  
  return (
    <Box
      position={'relative'}
      sx={{
        // eslint-disable-next-line no-undef
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/detail_bg.jpeg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container
        zIndex={3}
        position={'relative'}
        minHeight={{ xs: 250, sm: 400, md: 560 }}
        maxHeight={560}
        display={'flex'}
        alignItems={'center'}
      >
        <Box>
          <Box marginBottom={2}>
            <Typography
              align={'left'}
              sx={{
                fontWeight: {
                  xs: '700',
                  md: '500',
                },
                fontSize: {
                  xs: '20px',
                  md: '40px',
                },
                color: '#009F41',
                backgroundColor: '#ffffff',
                paddingY: {
                  xs: '8px',
                  md: '22px',
                },
                paddingX: {
                  xs: '30px',
                  md: '60px',
                },
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainVisual;
