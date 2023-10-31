import React from 'react';
import PropTypes from 'prop-types';

function Question (props) {
  return (
    <div className="form-container-grey">
      <h4>Questions:</h4>
      {props.elements?.map ((element, index) => (
        <div key={index} className="element-container">
          <label className="label">
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              className="green-border-input"
              onChange={e => props.onElementChange (e, index)}
            />
          </label>
          <label className="label">
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              className="green-border-input"
              onChange={e => props.onElementChange (e, index)}
            />
          </label>
          <div className="checkbox-div">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange (e, index)}
            />
            <button
              className="button-delete"
              type="button"
              onClick={() => props.onDeleteElement (index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button type="button" onClick={props.onAddElement}>
        Add Question Element
      </button>

    </div>
  );
}

Question.propTypes = {
  elements: PropTypes.arrayOf (
    PropTypes.shape ({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onElementChange: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElement: PropTypes.func.isRequired,
};

export default Question;
