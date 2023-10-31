import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <div className="form-container">
      <h4>Comments:</h4>
      {props.elements2?.map ((element, index) => (
        <div key={index} className="element-container">
          <label className='label'>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              className="green-border-input"
              onChange={e => props.onElementChange2 (e, index)}
            />
          </label>

          <label className='label'>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              className="green-border-input"
              onChange={e => props.onElementChange2 (e, index)}
            />
          </label>

          <div className="checkbox-div">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange2 (e, index)}
            />
            <button
              className='button-delete'
              type="button"
              onClick={() => props.onDeleteElement2 (index)}
            >
              Delete
            </button>
          </div>

        </div>
      ))}

      <button type="button" onClick={props.onAddElement2}>
        Add Comment Element
      </button>

    </div>
  );
};

Comment.propTypes = {
  elements2: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onElementChange2: PropTypes.func.isRequired,
  onDeleteElement2: PropTypes.func.isRequired,
  onAddElement2: PropTypes.func.isRequired,
};

export default Comment;
