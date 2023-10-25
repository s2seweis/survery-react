import React from 'react';

const Checkbox = props => {
  return (
    <div className="form-container-grey">
      <h4>Checkbox:</h4>
      {props.elements3.map ((element, index) => (
        <div key={index} className="element-container">
          <label className='label'>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              className="green-border-input"
              onChange={e => props.onElementChange3 (e, index)}
            />
          </label>

          <label className='label'>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              className="green-border-input"
              onChange={e => props.onElementChange3 (e, index)}
            />
          </label>

          <label>
            Choices (comma-separated):
            <input
              type="text"
              name="choices"
              value={element.choices.join (', ')}
              onChange={e => props.onElementChange3 (e, index)}
              placeholder={'0-20, 21-50, 51-70'}
              className="green-border-input"
            />
          </label>

          <label className="checkbox-div">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange3 (e, index)}
            />
            <button
              className='button-delete'
              type="button"
              onClick={() => props.onDeleteElement3 (index)}
            >
              Delete
            </button>
          </label>

        </div>
      ))}

      <button type="button" onClick={props.onAddElement3}>
        Add Checkbox Element
      </button>

    </div>
  );
};

export default Checkbox;
