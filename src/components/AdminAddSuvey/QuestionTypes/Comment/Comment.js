import React from 'react';

const Comment = props => {
  // console.log("line:900", props);
  return (
    <div className="form-container">
      <h4>Comments:</h4>
      {props.elements2.map ((element, index) => (
        <div key={index} className="element-container">
          <label className='label'>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={e => props.onElementChange2 (e, index)}
            />
          </label>

          <label className='label'>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
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

export default Comment;
