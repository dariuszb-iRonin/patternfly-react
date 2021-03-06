import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Breadcrumb as BsBreadcrumb } from 'react-bootstrap';

const Breadcrumb = ({ title, ...props }) => {
  const breadcrumbClass = cx({
    'breadcrumbs-pf-title': title
  });
  return <BsBreadcrumb className={breadcrumbClass} {...props} />;
};

Breadcrumb.propTypes = {
  ...BsBreadcrumb.propTypes,
  title: PropTypes.bool
};

Breadcrumb.defaultProps = {
  title: false
};

Breadcrumb.Item = BsBreadcrumb.Item;

export default Breadcrumb;
