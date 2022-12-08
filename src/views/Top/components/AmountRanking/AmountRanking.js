import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const mock = [
  {
    image: 'assets/images/reduction.png',
    description: '各事業者の年度別の温室効果ガス削減量をランキングにして公表しています。排出年度からの絞り込みもできます。',
    title: '年度別削減量ランキング',
    href: '/reduction',
  },
  {
    image: 'assets/images/emossion.png',
    description: '各事業者の年度別の温室効果ガス排出量をランキングにして公表しています。排出年度からの絞り込みもできます。',
    title: '年度別排出量ランキング',
    href: '/emossion',
  },
];

const AmountRanking = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {mock.map((item, i) => (
          <Grid sx={{ marginX: '16px' }} marginBottom={{ xs: '24px' }} key={i}>
            <Box
              component={'a'}
              // eslint-disable-next-line no-undef
              href={process.env.PUBLIC_URL + item.href}
              display={'block'}
              width={{ xs: '210px', sm: '300px', md: '500px' }}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.25)'}
                display={'flex'}
                flexDirection={'column'}
                sx={{ 
                  backgroundImage: 'none',
                }}
              >
                <Box
                  paddingTop={'14px'}
                  paddingBottom={{ xs: '8px', md: '24px' }}
                >
                  <CardMedia
                    // eslint-disable-next-line no-undef
                    image={process.env.PUBLIC_URL + item.image}
                    title={item.title}
                    sx={{
                      width: '140px',
                      height: '140px',
                      marginX: 'auto',
                      position: 'relative',
                    }}
                  >
                  </CardMedia>
                </Box>
                <Box component={CardContent} position={'relative'} paddingY={'0px'}>
                  <Typography
                    fontSize={{ xs: '16px', md: '20px' }}
                    fontWeight={'500'}
                    align={'center'}
                    color={'#262626'}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    fontSize={{ xs: '12px', md: '16px' }}
                    color={'#262626'}
                    marginTop={{ xs: '8px', md: '24px' }}
                    paddingX={{ md: '70px' }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box padding={{ xs: 1.5, md: 3 }} display={'flex'} flexDirection={'column'}>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AmountRanking;
