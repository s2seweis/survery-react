import React, { useState, useEffect } from 'react';
import ChildQuestion from './TestQuestion';
import TestComment from './TestComment';
import TestCheckbox from './TestCheckbox';
import TestRadioGroup from './TestRadiogroup';
import TestRating from './TestRating';
import RestForm from './RestForm';

import './index.css'; // Import your CSS file for styling


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function ParentComponent() {




  const [formData, setFormData] = useState({
    elements: [],
  });
  console.log('line:1', formData.elements);

  const [formData2, setFormData2] = useState({
    elements2: [],
  });

  const [formData3, setFormData3] = useState({
    elements3: [],
  });

  const [formData4, setFormData4] = useState({
    elements4: [],
  });

  const [formData5, setFormData5] = useState({
    elements5: [],
  });
  console.log('line:800', formData);

  // #################################################################### - Question

  const [characters, updateCharacters] = useState([]);
  console.log("line:122", characters);

  useEffect(() => {


    const mergedElements = [
      ...formData.elements,
      ...formData2.elements2,
      ...formData3.elements3,
      ...formData4.elements4,
      ...formData5.elements5,
    ];


    const extractedData = mergedElements.map(element => {
      return {
        name: element.name,
        title: element.title,
        type: element.type,
        isRequired: element.isRequired,
        choices: element.choices

      };
    });

    updateCharacters(extractedData);
    console.log("line:122", characters);

  }, [formData, formData2, formData3, formData4, formData5]);





  // #################################################################### - Question

  const handleAddElement = () => {
    setFormData(prevData => ({
      elements: [
        ...prevData.elements,
        {
          type: 'text',
          name: '',
          title: '',
          isRequired: true,
        },
      ],
    }));
  };

  const handleElementChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedElements = [...formData.elements];
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setFormData({ elements: updatedElements });
  };

  const handleDeleteElement = index => {
    const updatedElements = [...formData.elements];
    updatedElements.splice(index, 1);
    setFormData({ elements: updatedElements });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log(formData);
    console.log(formData2);
    console.log(formData3);
    console.log(formData4);
    console.log('line:322', formData5);
  };

  // #################################################################### - Comment

  const handleAddElement2 = () => {
    setFormData2(prevData => ({
      elements2: [
        ...prevData.elements2,
        {
          type: 'comment',
          name: '',
          title: '',
          isRequired: true,
        },
      ],
    }));
  };

  const handleElementChange2 = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedElements = [...formData2.elements2];
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setFormData2({ elements2: updatedElements });
  };

  const handleDeleteElement2 = index => {
    const updatedElements = [...formData2.elements2];
    updatedElements.splice(index, 1);
    setFormData2({ elements2: updatedElements });
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log(formData2);
  };

  // #################################################################### - Checkbox

  const handleAddElement3 = () => {
    setFormData3(prevData => ({
      elements3: [
        ...prevData.elements3,
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

  const handleElementChange3 = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedElements = [...formData3.elements3];
    let newValue = type === 'checkbox' ? checked : value;

    if (name === 'choices') {
      // Ensure choices is always an array
      newValue = newValue.split(',').map(choice => choice.trim());
    }

    updatedElements[index] = {
      ...updatedElements[index],
      [name]: newValue,
    };

    setFormData3({ elements3: updatedElements });
  };

  const handleDeleteElement3 = index => {
    const updatedElements = [...formData3.elements3];
    updatedElements.splice(index, 1);
    setFormData3({ elements3: updatedElements });
  };

  const handleSubmit3 = e => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log(formData3);
  };

  // #################################################################### - Radio

  const handleAddElement4 = () => {
    setFormData4(prevData => ({
      elements4: [
        ...prevData.elements4,
        {
          type: 'radiogroup',
          name: '',
          title: '',
          isRequired: true,
          choices: [],
        },
      ],
    }));
  };

  const handleElementChange4 = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedElements = [...formData4.elements4];
    let newValue = value;
    if (name === 'choices') {
      // Split comma-separated values into an array
      newValue = value.split(',').map(choice => choice.trim());
    }
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : newValue,
    };
    setFormData4({ elements4: updatedElements });
  };

  const handleDeleteElement4 = index => {
    const updatedElements = [...formData4.elements4];
    updatedElements.splice(index, 1);
    setFormData4({ elements4: updatedElements });
  };

  const handleSubmit4 = e => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log(formData4);
  };

  // #################################################################### - Rating

  const handleAddElement5 = () => {
    setFormData5(prevData => ({
      elements5: [
        ...prevData.elements5,
        {
          type: 'rating',
          name: '',
          title: '',
          isRequired: true,
          rateMin: 1,
          rateMax: 5,
        },
      ],
    }));
  };

  // const handleElementChange5 = (e, index) => {
  //     const { name, value, type, checked } = e.target;
  //     const updatedElements = [...formData5.elements5];
  //     updatedElements[index] = {
  //         ...updatedElements[index],
  //         [name]: type === 'checkbox' ? checked : value,
  //     };
  //     setFormData5({ elements5: updatedElements });
  // };

  const handleElementChange5 = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedElements = [...formData5.elements5];
    let newValue = type === 'checkbox' ? checked : value;

    // Parse numeric inputs to integers
    if (name === 'rateMin' || name === 'rateMax') {
      newValue = parseInt(value, 10);
    }

    updatedElements[index] = {
      ...updatedElements[index],
      [name]: newValue,
    };
    setFormData5({ elements5: updatedElements });
  };

  const handleDeleteElement5 = index => {
    const updatedElements = [...formData5.elements5];
    updatedElements.splice(index, 1);
    setFormData5({ elements5: updatedElements });
  };

  const handleSubmit5 = e => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log(formData5);
  };

  function handleonDragEnd(result) {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);

  }

  return (
    <div className="form-container">

      <h2>Add Questions to the Survey:</h2>

      <form  className="form" onSubmit={handleSubmit}>
        {/* ... (same code as before) */}
        <ChildQuestion 
          elements={formData.elements}
          onAddElement={handleAddElement}
          onElementChange={handleElementChange}
          onDeleteElement={handleDeleteElement}
        />
        {/* ### */}
        <TestComment
          elements2={formData2.elements2}
          onElementChange2={handleElementChange2}
          onDeleteElement2={handleDeleteElement2}
          onAddElement2={handleAddElement2}
        />
        {/* ### */}
        <TestCheckbox
          elements3={formData3.elements3}
          onAddElement3={handleAddElement3}
          onElementChange3={handleElementChange3}
          onDeleteElement3={handleDeleteElement3}
        />
        {/* ### */}

        <TestRadioGroup
          elements4={formData4.elements4}
          onElementChange4={handleElementChange4}
          onAddElement4={handleAddElement4}
          onDeleteElement4={handleDeleteElement4}
        />

        {/* ### */}

        <TestRating
          elements5={formData5.elements5}
          onElementChange5={handleElementChange5}
          onAddElement5={handleAddElement5}
          onDeleteElement5={handleDeleteElement5}
        />

        <h2>Rearrange the Survey Questions:</h2>
        <DragDropContext onDragEnd={handleonDragEnd} >
          <Droppable droppableId='characters'>
            {(provided) => (
              <ol   {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((data, index) => (
                  <Draggable key={index} draggableId={`draggable-${index}`} index={index}>
                    {(provided) => (
                      <li style={{background:"lightblue", padding:"10px", marginBottom:"10px"}}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <strong>Name:</strong> {data.name}, <strong>Title:</strong> {data.title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ol>
            )}
          </Droppable>
        </DragDropContext>

      <RestForm data={characters} ></RestForm>

      </form>
    </div>
  );
}

export default ParentComponent;
