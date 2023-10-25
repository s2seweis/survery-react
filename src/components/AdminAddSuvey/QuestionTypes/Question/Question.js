import React from 'react';

function Question (props) {
  return (
    <div className="form-container-grey">
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
          <label className='label'>
            Name:
            <input
              type="text"
              name="name"
              value={element.name}
              className="green-border-input"
              onChange={e => props.onElementChange (e, index)}
            />
          </label>

          <label className='label'>
            Title:
            <input
              type="text"
              name="title"
              value={element.title}
              className="green-border-input"
              onChange={e => props.onElementChange (e, index)}
            />
          </label>


          <div  className="checkbox-div">
            Is Required:
            <input
              type="checkbox"
              name="isRequired"
              checked={element.isRequired}
              onChange={e => props.onElementChange (e, index)}
            />
            <button
              className='button-delete'
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

export default Question;
