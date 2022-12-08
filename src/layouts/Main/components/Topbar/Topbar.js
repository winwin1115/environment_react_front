import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingTop={1}
      paddingBottom={1}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        width={{ xs: 200, md: 300 }}
      >
        <Box
          component={'img'}
          // eslint-disable-next-line no-undef
          src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'排出量ランキング'}
            linkTitle={'/emossion'}
            items={'emossion'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={'30px'}>
          <NavItem
            title={'削減量ランキング'}
            linkTitle={'/reduction'}
            items={'reduction'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={'30px'}>
          <NavItem
            title={'企業一覧'}
            linkTitle={'/companylist'}
            items={'companylist'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={'30px'}>
          <Link href={'http://blog.cndb.jp'} target="_blank" underline="none" colorInvert={colorInvert} color={'#262626'} fontWeight={'400'}>記事一覧</Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon
            sx={{
              color: '#000000',
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
