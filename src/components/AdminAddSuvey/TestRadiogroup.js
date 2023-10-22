import React from 'react';

const TestRadioGroup = (props) => {
  // console.log("line:310", props);
  return (
    <div className="form-container">
       <h4>Radio Group:</h4>
      {props.elements4.map((element, index) => (
        <div key={index} className="element-container">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={(e) => props.onElementChange4(e, index)}
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              onChange={(e) => props.onElementChange4(e, index)}
            />
          </label>

          <label>
            Choices (comma-separated):
            <input
              type="text"
              name="choices"
              value={element.choices.join(', ')}
              onChange={(e) => props.onElementChange4(e, index)}
            />
          </label>

          <label className="checkbox-label">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={(e) => props.onElementChange4(e, index)}
            />
          <button style={{background:"red"}} type="button" onClick={() => props.onDeleteElement4(index)}>
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

export default TestRadioGroup;
