import React from 'react';
import {remFeature} from '../components/actions/actions'
import {connect} from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={() => props.remFeature(props.feature)}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {remFeature})(AddedFeature);
