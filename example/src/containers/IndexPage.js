import React from 'react';
import { connect } from 'react-redux';
import { MyComponent } from '../../../src';

const IndexPage = () => (
  <div className="index">
    <MyComponent />
  </div>
);

IndexPage.defaultProps = {
};

IndexPage.propTypes = {
};

export default connect()(IndexPage);
