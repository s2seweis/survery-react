import React from 'react';

function ChildQuestion (props) {
  return (
    <div className="form-container">
      <h4>Questions:</h4>
      {props.elements.map ((element, index) => (
        <div key={index} className="element-container">
          {/* <label>
              Type:
              <input
                type="text"
                name="type"
                value={element.type}
                onChange={(e) => props.onElementChange(e, index)}
              />
            </label> */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              onChange={e => props.onElementChange (e, index)}
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              onChange={e => props.onElementChange (e, index)}
            />
          </label>


          <label  className="checkbox-label">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange (e, index)}
            />
            <button
              style={{background: 'red'}}
              type="button"
              onClick={() => props.onDeleteElement (index)}
            >
              Delete
            </button>
          </label>
        </div>
      ))}

      <button type="button" onClick={props.onAddElement}>
        Add Question Element
      </button>

    </div>
  );
}

export default ChildQuestion;
