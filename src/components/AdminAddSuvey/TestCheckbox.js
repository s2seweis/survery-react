import React from 'react';

const TestCheckbox = (props) => {
  return (
    <div className="form-container">
       <h4>Checkbox:</h4>
      {props.elements3.map((element, index) => (
        <div key={index} className="element-container">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={(e) => props.onElementChange3(e, index)}
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              onChange={(e) => props.onElementChange3(e, index)}
            />
          </label>

          <label>
            Choices (comma-separated):
            <input
              type="text"
              name="choices"
              value={element.choices.join(', ')}
              onChange={(e) => props.onElementChange3(e, index)}
              placeholder={"0-20, 21-50, 51-70"}
            />
          </label>

          <label className="checkbox-label">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={(e) => props.onElementChange3(e, index)}
            />
          <button style={{background:"red"}} type="button" onClick={() => props.onDeleteElement3(index)}>
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

export default TestCheckbox;
