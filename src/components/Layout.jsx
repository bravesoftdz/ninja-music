import React from 'react';
import PropTypes from 'prop-types';
import Reboot from 'material-ui/Reboot';

import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Reboot />
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
