import React from 'react';
import PropTypes from 'prop-types';

const Rating = props => {
  return (
    <div className="form-container-grey">
      <h4>Rating Group:</h4>
      {props.elements5.map ((element, index) => (
        <div key={index} className="element-container">
          <label className='label'>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={e => props.onElementChange5 (e, index)}
              className="green-border-input"
            />
          </label>

          <label className='label'>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              onChange={e => props.onElementChange5 (e, index)}
              className="green-border-input"
            />
          </label>

          <label className='label'>
            Minimum Rating:
            <input
              type="number"
              name="rateMin"
              value={element.rateMin}
              onChange={e => props.onElementChange5 (e, index)}
              className="green-border-input"
            />
          </label>

          <label className='label'>
            Maximum Rating:
            <input
              type="number"
              name="rateMax"
              value={element.rateMax}
              onChange={e => props.onElementChange5 (e, index)}
              className="green-border-input"
            />
          </label>

          <label className="checkbox-div">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange5 (e, index)}
            />
            <button
              className='button-delete'
              type="button"
              onClick={() => props.onDeleteElement5 (index)}
            >
              Delete
            </button>
          </label>

        </div>
      ))}

      <button type="button" onClick={props.onAddElement5}>
        Add Rating Element
      </button>

    </div>
  );
};

Rating.propTypes = {
  elements5: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rateMin: PropTypes.number.isRequired,
      rateMax: PropTypes.number.isRequired,
      isRequired: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onElementChange5: PropTypes.func.isRequired,
  onDeleteElement5: PropTypes.func.isRequired,
  onAddElement5: PropTypes.func.isRequired,
};

export default Rating;
