import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling

const Checkbox = () => {
  const [formData, setFormData] = useState({
    elements: [
    //   {
    //     type: 'checkbox',
    //     name: '',
    //     title: '',
    //     isRequired: true,
    //     choices: [''],
    //   },
    ],
  });
  console.log("line:300", formData);

  const handleElementChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedElements = [...formData.elements];
    let newValue = value;
    if (name === 'choices') {
      // Split comma-separated values into an array
      newValue = value.split(',').map(choice => choice.trim());
    }
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : newValue,
    };
    setFormData({ elements: updatedElements });
  };

  const handleAddElement = () => {
    setFormData((prevData) => ({
      elements: [
        ...prevData.elements,
        {
          type: 'checkbox',
          name: '',
          title: '',
          isRequired: true,
          choices: [],
        },
      ],
    }));
  };

  const handleDeleteElement = (index) => {
    const updatedElements = [...formData.elements];
    updatedElements.splice(index, 1);
    setFormData({ elements: updatedElements });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {formData.elements.map((element, index) => (
          <div key={index} className="element-container">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={element.name}
                onChange={(e) => handleElementChange(e, index)}
              />
            </label>

            <label>
              Title:
              <input
                type="text"
                name="title"
                value={element.title}
                onChange={(e) => handleElementChange(e, index)}
              />
            </label>

            <label className="checkbox-label">
              Is Required:
              <input
                type="checkbox"
                name="isRequired"
                checked={element.isRequired}
                onChange={(e) => handleElementChange(e, index)}
              />
            </label>

            <label>
              Choices (comma-separated):
              <input
                type="text"
                name="choices"
                value={element.choices.join(', ')}
                onChange={(e) => handleElementChange(e, index)}
              />
            </label>

            <button type="button" onClick={() => handleDeleteElement(index)}>
              Delete
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddElement}>
          Add Element
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkbox;
