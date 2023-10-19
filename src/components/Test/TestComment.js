import React from 'react';

const TestComment = (props) => {
    console.log("line:900", props);
  return (
    <div className="form-container">
      {props.elements2.map((element, index) => (
        <div key={index} className="element-container">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={(e) => props.onElementChange2(e, index)}
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              onChange={(e) => props.onElementChange2(e, index)}
            />
          </label>

          <button type="button" onClick={() => props.onDeleteElement2(index)}>
            Delete
          </button>
        </div>
      ))}

      <button type="button" onClick={props.onAddElement2}>
        Add Comment Element
      </button>

      <button type="submit">Submit</button>
    </div>
  );
};

export default TestComment;
