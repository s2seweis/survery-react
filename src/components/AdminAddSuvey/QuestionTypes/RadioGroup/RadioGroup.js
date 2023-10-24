import React from 'react';

const RadioGroup = props => {
  // console.log("line:310", props);
  return (
    <div className="form-container">
      <h4>Radio Group:</h4>
      {props.elements4.map ((element, index) => (
        <div key={index} className="element-container">
          <label className='label'>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={e => props.onElementChange4 (e, index)}
            />
          </label>

          <label className='label'>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              onChange={e => props.onElementChange4 (e, index)}
            />
          </label>

          <label className='label'>
            Choices (comma-separated):
            <input
              type="text"
              name="choices"
              value={element.choices.join (', ')}
              onChange={e => props.onElementChange4 (e, index)}
            />
          </label>

          <label className="checkbox-div">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange4 (e, index)}
            />
            <button
              className='button-delete'
              type="button"
              onClick={() => props.onDeleteElement4 (index)}
            >
              Delete
            </button>
          </label>

        </div>
      ))}

      <button type="button" onClick={props.onAddElement4}>
        Add Radio Element
      </button>

    </div>
  );
};

export default RadioGroup;
