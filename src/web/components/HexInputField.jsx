import React from 'react';
import PropTypes from 'prop-types';
import HexInput from './HexInput';

const InputField = ({
  label, id, value, handleChange, horizontal, ...otherProps
}) => {
  const inputToRender = (
    <HexInput
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      {...otherProps}
    />
  );

  return (
    <div className={`form-group${horizontal ? ' row' : ''}`}>
      <label htmlFor={id} className={`${horizontal ? 'col-sm-3 col-form-label' : ''}`}>
        {label}
      </label>
      {horizontal ? <div className="col-sm-9">{inputToRender}</div> : inputToRender}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  horizontal: PropTypes.bool,
  handleChange: PropTypes.func,
};
InputField.defaultProps = {
  value: '',
  horizontal: false,
  handleChange: () => {},
};

export default InputField;
