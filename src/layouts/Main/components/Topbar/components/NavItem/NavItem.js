import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const NavItem = ({ title, linkTitle, id, items, colorInvert = false }) => {

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items === activeLink;
  const linkColor = colorInvert ? '#262626' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
      >
        <NavLink
          to={linkTitle}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 700 : 400}
            color={linkColor}
          >
            {title}
          </Typography>
        </NavLink>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
