/* eslint-disable */
import React, {useState, useEffect} from 'react';
import Question from '../QuestionTypes/Question/Question';
import Comment from '../QuestionTypes/Comment/Comment';
import Checkbox from '../QuestionTypes/CheckBox/CheckBox';
import RadioGroup from '../QuestionTypes/RadioGroup/RadioGroup';
import Rating from '../QuestionTypes/Rating/Rating';
import DndList from '../DndList/DndList';
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {updateDataAdmin} from '../../../redux/actions/survey';
import './EditSurvey.css'; // Import your CSS file for styling

function EditSurvey () {
  const {dataid} = useParams ();
  const dispatch = useDispatch ();
  const surveyDataFromRedux = useSelector (state => state.data.surveyData);
  const [surveys, setSurveys] = useState ({});

  // #################################################################### - Initial State
  
  const [formData, setFormData] = useState ({
    elements: [],
  });
  
  const [formData2, setFormData2] = useState ({
    elements2: [],
  });

  const [formData3, setFormData3] = useState ({
    elements3: [],
  });

  const [formData4, setFormData4] = useState ({
    elements4: [],
  });
  
  const [formData5, setFormData5] = useState ({
    elements5: [],
  });
  
  // #################################################################### - useEffect

  useEffect (
    () => {
      if (surveyDataFromRedux.length === 0) {
        // dispatch (getAllCars ());
        console.log ('No surveys found!');
      } else {
        setSurveys (surveyDataFromRedux.find (o => o.id === dataid));
        // setFormData();
      }
    },
    [surveyDataFromRedux],
  );

  const {pages} = surveys;

  useEffect (
    () => {
      if (pages && pages.length > 0 && pages[0].elements) {
        // Access the 'elements' array from the first page of the survey object
        const elementsArray = pages[0].elements;

        const elementsArrayNew1 = elementsArray.filter (
          obj => obj.type === 'text',
        );

        const elementsArrayNew2 = elementsArray.filter (
          obj => obj.type === 'comment',
        );

        const elementsArrayNew3 = elementsArray.filter (
          obj => obj.type === 'checkbox',
        );

        const elementsArrayNew4 = elementsArray.filter (
          obj => obj.type === 'radiogroup',
        );

        const elementsArrayNew5 = elementsArray.filter (
          obj => obj.type === 'rating',
        );

        // Update the 'elements' array in the formData state
        setFormData (prevData => {
          return {
            ...prevData,
            elements: [...elementsArrayNew1],
          };
        });
        setFormData2 (prevData => {
          return {
            ...prevData,
            elements2: [...elementsArrayNew2],
          };
        });
        setFormData3 (prevData => {
          return {
            ...prevData,
            elements3: [...elementsArrayNew3],
          };
        });
        setFormData4 (prevData => {
          return {
            ...prevData,
            elements4: [...elementsArrayNew4],
          };
        });
        setFormData5 (prevData => {
          return {
            ...prevData,
            elements5: [...elementsArrayNew5],
          };
        });
      }
    },
    [pages],
  );

  // #################################################################### - Dnd

  const [characters, updateCharacters] = useState ([]);

  useEffect (
    () => {
      const mergedElements = [
        ...formData.elements,
        ...formData2.elements2,
        ...formData3.elements3,
        ...formData4.elements4,
        ...formData5.elements5,
      ];

      const extractedData = mergedElements.map (element => {
        return {
          name: element.name,
          title: element.title,
          type: element.type,
          isRequired: element.isRequired,
          choices: element.choices || null,
          rateMax: element.rateMax || null,
          rateMin: element.rateMin || null,
        };
      });

      updateCharacters (extractedData);
    },
    [formData, formData2, formData3, formData4, formData5],
  );

  function handleonDragEnd (result) {
    const items = Array.from (characters);
    const [reorderedItem] = items.splice (result.source.index, 1);
    items.splice (result.destination.index, 0, reorderedItem);

    updateCharacters (items);
  }

  // #################################################################### - Question

  const handleAddElement = () => {
    setFormData (prevData => ({
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
    const {name, value, type, checked} = e.target;
    const updatedElements = [...formData.elements];
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setFormData ({elements: updatedElements});
  };

  const handleDeleteElement = index => {
    const updatedElements = [...formData.elements];
    updatedElements.splice (index, 1);
    setFormData ({elements: updatedElements});
  };

  const handleSubmit = e => {
    e.preventDefault ();
    // Handle form submission logic here with formData
  };

  // #################################################################### - Comment

  const handleAddElement2 = () => {
    setFormData2 (prevData => ({
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
    const {name, value, type, checked} = e.target;
    const updatedElements = [...formData2.elements2];
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setFormData2 ({elements2: updatedElements});
  };

  const handleDeleteElement2 = index => {
    const updatedElements = [...formData2.elements2];
    updatedElements.splice (index, 1);
    setFormData2 ({elements2: updatedElements});
  };

  // #################################################################### - Checkbox

  const handleAddElement3 = () => {
    setFormData3 (prevData => ({
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
    const {name, value, type, checked} = e.target;
    const updatedElements = [...formData3.elements3];
    let newValue = type === 'checkbox' ? checked : value;

    if (name === 'choices') {
      // Ensure choices is always an array
      newValue = newValue.split (',').map (choice => choice.trim ());
    }

    updatedElements[index] = {
      ...updatedElements[index],
      [name]: newValue,
    };

    setFormData3 ({elements3: updatedElements});
  };

  const handleDeleteElement3 = index => {
    const updatedElements = [...formData3.elements3];
    updatedElements.splice (index, 1);
    setFormData3 ({elements3: updatedElements});
  };

  // #################################################################### - Radio

  const handleAddElement4 = () => {
    setFormData4 (prevData => ({
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
    const {name, value, type, checked} = e.target;
    const updatedElements = [...formData4.elements4];
    let newValue = value;
    if (name === 'choices') {
      // Split comma-separated values into an array
      newValue = value.split (',').map (choice => choice.trim ());
    }
    updatedElements[index] = {
      ...updatedElements[index],
      [name]: type === 'checkbox' ? checked : newValue,
    };
    setFormData4 ({elements4: updatedElements});
  };

  const handleDeleteElement4 = index => {
    const updatedElements = [...formData4.elements4];
    updatedElements.splice (index, 1);
    setFormData4 ({elements4: updatedElements});
  };

  // #################################################################### - Rating

  const handleAddElement5 = () => {
    setFormData5 (prevData => ({
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

  const handleElementChange5 = (e, index) => {
    const {name, value, type, checked} = e.target;
    const updatedElements = [...formData5.elements5];
    let newValue = type === 'checkbox' ? checked : value;

    // Parse numeric inputs to integers
    if (name === 'rateMin' || name === 'rateMax') {
      newValue = parseInt (value, 10);
    }

    updatedElements[index] = {
      ...updatedElements[index],
      [name]: newValue,
    };
    setFormData5 ({elements5: updatedElements});
  };

  const handleDeleteElement5 = index => {
    const updatedElements = [...formData5.elements5];
    updatedElements.splice (index, 1);
    setFormData5 ({elements5: updatedElements});
  };

  // #################################################################### - Rest Form

  const initialSurvey = {
    title: characters.title || 'About your workplace',
    pages: characters.pages || [{name: 'page1', elements: []}],
  };

  const [surveyData, setSurveyData] = useState ({
    initialSurvey,
  });

  const data500 = {
    title: surveyData.title || surveys.title,
    pages: [{name: 'page1', elements: characters}],
  };

  useEffect (
    () => {
      setSurveyData (data500);
    },
    [characters],
  );

  const handleTitleChange = e => {
    setSurveyData ({...surveyData, title: e.target.value});
  };

  const handlePageNameChange = (e, pageIndex) => {
    const updatedSurvey = {...surveyData};
    updatedSurvey.pages[pageIndex].name = e.target.value;
    setSurveyData (updatedSurvey);
  };

  // #################################################################### - Submit to Firestore

  const navigate = useNavigate ();

  const handleSubmitForm = async e => {
    e.preventDefault ();
    try {
      // Update data in Firestore
      await dispatch (updateDataAdmin (dataid, surveyData));

      console.log ('Document updated successfully');
      navigate ('/admin');
    } catch (error) {
      console.error ('Error updating document: ', error);
    }
  };

  // #################################################################### - Back Button

  return (
    <div>

      <form style={{width: '', margin: 'auto'}} onSubmit={handleSubmitForm}>

        <h2 style={{backgroundColor: '#F4F4F4', padding: '10px'}}>
          Survey Form
        </h2>
        <hr className="green-line-1" />

        <div className="form-container-1">
          <div className="element-container-1">

            <label className="label">
              <h4>Title:</h4>
              <input
                type="text"
                name="title"
                value={surveyData.title}
                onChange={handleTitleChange}
                className="green-border-input"
              />
            </label>
            {surveyData.pages?.map ((page, pageIndex) => (
              <div className="label" key={pageIndex}>
                <label className="label">
                  <h4>Page Name:</h4>
                  <input
                    type="text"
                    name="pageName"
                    value={page.name}
                    onChange={e => handlePageNameChange (e, pageIndex)}
                    disabled
                  />
                </label>
                {page.elements.map ((element, elementIndex) => (
                  <div key={elementIndex} />
                ))}

              </div>
            ))}

          </div>
        </div>

        <div style={{}} className="form-container">
          <div className="main-admin" onSubmit={handleSubmit}>
            <h2>Add Questions to the Survey:</h2>
            <hr className="green-line" />
            <Question
              elements={formData.elements}
              onAddElement={handleAddElement}
              onElementChange={handleElementChange}
              onDeleteElement={handleDeleteElement}
              // surveyData={surveyData}
            />
            <hr />
            <Comment
              elements2={formData2.elements2}
              onElementChange2={handleElementChange2}
              onDeleteElement2={handleDeleteElement2}
              onAddElement2={handleAddElement2}
            />
            <hr />
            <Checkbox
              elements3={formData3.elements3}
              onAddElement3={handleAddElement3}
              onElementChange3={handleElementChange3}
              onDeleteElement3={handleDeleteElement3}
            />
            <hr />
            <RadioGroup
              elements4={formData4.elements4}
              onElementChange4={handleElementChange4}
              onAddElement4={handleAddElement4}
              onDeleteElement4={handleDeleteElement4}
            />
            <hr />
            <Rating
              elements5={formData5.elements5}
              onElementChange5={handleElementChange5}
              onAddElement5={handleAddElement5}
              onDeleteElement5={handleDeleteElement5}
            />
            <hr />

          </div>
          <div>
            <DndList
              characters={characters}
              handleonDragEnd={handleonDragEnd}
            />
          </div>
          <div className="submit-form" style={{}}>
            <button style={{background: '#45a049'}} type="submit">
              Update Survey
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default EditSurvey;
