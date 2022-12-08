import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const MainVisual = () => {
  const theme = useTheme();
  return (
    <Box
      position={'relative'}
      sx={{
        // eslint-disable-next-line no-undef
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bg.jpeg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container
        zIndex={3}
        position={'relative'}
        minHeight={600}
        maxHeight={600}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          <Box marginBottom={2} paddingRight={{ xs: '60%', md: '55%' }}>
            <Typography
              align={'left'}
              sx={{
                fontSize: {
                  xs: '20px',
                  md: '48px',
                },
                fontWeight: 700,
                color: '#262626',
                backgroundColor: '#ffffff',
                paddingY: '11px',
                paddingLeft: '13px',
              }}
            >
              企業脱炭素化情報サイト
            </Typography>
          </Box>
          <Box paddingRight={{ xs: '25%', md: '28%' }}>
            <Typography
              align={'left'}
              sx={{
                fontSize: {
                  xs: '12px',
                  md: '20px',
                },
                fontWeight: 700,
                color: '#262626',
                backgroundColor: '#ffffff',
                paddingY: '11px',
                paddingLeft: '13px',
              }}
            >
              環境省による温室効果ガス排出量の算定と報告をもとに、日系各企業の炭素排出量のデータを表示したデータベースサイトです。　各企業、各年の温室効果ガスの「排出量」と「削減量」とそのランキングを表示しています。
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        width={1}
        maxHeight={120}
        bottom={0}
        position={'absolute'}
        zIndex={2}
      >
        <path
          fill={theme.palette.alternate.main}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default MainVisual;
