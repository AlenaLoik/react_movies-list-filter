import React from 'react';
import PropTypes from 'prop-types';
import './Control.scss';

export const Control = ({ userChange }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={userChange}
        />
      </div>
    </div>
  </div>
);

Control.propTypes = {
  userChange: PropTypes.func.isRequired,
};
