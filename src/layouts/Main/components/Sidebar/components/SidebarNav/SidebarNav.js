import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { NavItem } from './components';
import Typography from '@mui/material/Typography';
import Close from '@mui/icons-material/Close';
import Link from '@mui/material/Link';

const SidebarNav = ({onClose}) => (
  <Box>
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      width={1}
      paddingX={2}
      paddingY={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        sx={{
          textDecoration: 'none'
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '12px'
          }}
        >
          企業脱炭素化情報サイト
        </Typography>
      </Box>
      <Close
        onClick={onClose}
        sx={{
          color: '#FFFFFF',
          fontSize: '20px',
          marginRight: '0'
        }}
      />
    </Box>
    <Box paddingX={4} paddingY={5}>
      <Box marginBottom={2}>
        <NavItem
          title={'排出量ランキング'}
          linkTitle={'/emossion'}
          items={'emossion'} />
      </Box>
      <Box marginBottom={2}>
        <NavItem
          title={'削減量ランキング'}
          linkTitle={'/reduction'}
          items={'reduction'} />
      </Box>
      <Box marginBottom={2}>
        <NavItem
          title={'企業一覧'}
          linkTitle={'/companylist'}
          items={'companylist'} />
      </Box>
      <Box>
        <Link href={'http://blog.cndb.jp'} target="_blank" underline="none" color={'#FFFFFF'} fontWeight={'400'}>記事一覧</Link>
      </Box>
    </Box>
  </Box>
);

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SidebarNav;
