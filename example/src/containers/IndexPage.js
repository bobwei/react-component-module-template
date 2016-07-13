import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../src';

const IndexPage = () => (
  <div className="index">
    <Button
      value="Button"
    />
  </div>
);

IndexPage.defaultProps = {
};

IndexPage.propTypes = {
};

export default connect()(IndexPage);
