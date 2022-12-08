import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {

  return (
    <Box>
      <Box
        display={'flex'}
        component='a'
        href='/'
        width={{ xs: 250, md: 300 }}
        marginX={{ xs: 'auto', md: '0' }}
      >
        <Box
          component={'img'}
          // eslint-disable-next-line no-undef
          src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
          height={1}
          width={1}
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems={'left'}
        sx={{
          borderBottom: '1px solid #717375',
          marginTop: '24px',
          paddingBottom: '40px',
        }}
      >
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'/'} underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>トップページ</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'/emossion'} underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>排出量ランキング</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'/reduction'} underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>削減量ランキング</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'/companylist'} underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>企業一覧</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'http://blog.cndb.jp'} underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>記事一覧</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'http://blog.cndb.jp/p/blog-page.html'} target="_blank" underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>プライバシーポリシー</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '24px', md: '0px' } }}>
          <Link href={'http://blog.cndb.jp/p/blog-page_6.html'} target="_blank" underline="none" paddingRight={{ xs: '0px', md: '20px' }} color={'#262626'}>利用規約</Link>
        </Box>
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' }, marginX: { xs: 'auto', md: '0' }, marginBottom: { xs: '40px', md: '0px' } }}>
          <Link href={'http://blog.cndb.jp/p/blog-page_46.html'} target="_blank" underline="none" color={'#262626'}>お問い合わせ</Link>
        </Box>
      </Box>
      <Box>
        <Typography
          align={'center'}
          sx={{
            fontSize: {
              xs: '11px',
              md: '12px',
            },
            fontWeight: '400',
            color: '#666666',
            paddingTop: '24px'
          }}
        > 
          「
          <Link
            href={'https://ghg-santeikohyo.env.go.jp/result'}
            color="text.secondary"
            target="_blank"
            underline='none'
          >
            「温室効果ガス排出量の算定と報告」（環境省）
          </Link>
          を加工して作成」
        </Typography>
        <Typography
          align='right'
          sx={{
            fontSize: {
              xs: '11px',
              md: '12px',
            },
            fontWeight: '400',
            color: '#262626',
            marginTop: {
              xs: '18px',
              md: '-18px',
            },
          }}
        >
          ©alleyoop
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
