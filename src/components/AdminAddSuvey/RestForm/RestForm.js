import React, {useState, useEffect} from 'react';

const RestForm = props => {
  console.log ('line:200', props);

  const initialElement = {
    type: '',
    label: '',
    // Add more properties for the element as needed
  };

  const initialSurvey = {
    title: props.data.title || 'About your workplace',
    pages: props.data.pages || [{name: 'page1', elements: []}],
  };

  const [surveyData, setSurveyData] = useState ({
    initialSurvey,
  });
  console.log ('line:300', surveyData);

  const data500 = {
    title: '',
    pages: [{name: 'page1', elements: props.data}],
  };

  useEffect (
    () => {
      setSurveyData (data500);
    },
    [props.data]
  );

  const handleTitleChange = e => {
    setSurveyData ({...surveyData, title: e.target.value});
  };

  const handlePageNameChange = (e, pageIndex) => {
    const updatedSurvey = {...surveyData};
    updatedSurvey.pages[pageIndex].name = e.target.value;
    setSurveyData (updatedSurvey);
  };

  const handleAddPage = () => {
    const updatedSurvey = {...surveyData};
    const newPageName = `page${updatedSurvey.pages.length + 1}`;
    updatedSurvey.pages.push ({name: newPageName, elements: []});
    setSurveyData (updatedSurvey);
  };

  const handleAddElement = pageIndex => {
    const updatedSurvey = {...surveyData};
    updatedSurvey.pages[pageIndex].elements.push ({...initialElement});
    setSurveyData (updatedSurvey);
  };

  const handleElementChange = (e, pageIndex, elementIndex) => {
    const {name, value} = e.target;
    const updatedSurvey = {...surveyData};
    updatedSurvey.pages[pageIndex].elements[elementIndex][name] = value;
    setSurveyData (updatedSurvey);
  };

  const handleSubmit = e => {
    e.preventDefault ();
    // Handle form submission logic here, using surveyData
    // ***
    console.log (surveyData);
    // ***
  };

  return (
    <div className="form-container">
      <div className="element-container-1">

        <h2>Survey Form</h2>
        <form style={{width: '', margin: 'auto'}} onSubmit={handleSubmit}>
          <div className='label'>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={surveyData.title}
                onChange={handleTitleChange}
              />
            </label>
          </div>
          {surveyData.pages?.map ((page, pageIndex) => (
            <div className="label" key={pageIndex}>
              <label>
                Page Name:
                <input
                  type="text"
                  name="pageName"
                  value={page.name}
                  onChange={e => handlePageNameChange (e, pageIndex)}
                  disabled
                />
              </label>
              {page.elements.map ((element, elementIndex) => (
                <div key={elementIndex}>
                  {/* <label>
                  Element Type:
                  <input
                    type="text"
                    name="type"
                    value={element.type}
                    onChange={(e) => handleElementChange(e, pageIndex, elementIndex)}
                  />
                </label>
                <label>
                  Element Label:
                  <input
                    type="text"
                    name="label"
                    value={element.label}
                    onChange={(e) => handleElementChange(e, pageIndex, elementIndex)}
                  />
                </label> */}
                  {/* Add more input fields for other element properties */}
                </div>
              ))}
              {/* <button type="button" onClick={() => handleAddElement(pageIndex)}>
              Add Element
            </button> */}
            </div>
          ))}
          {/* <button type="button" onClick={handleAddPage}>
          Add Page
        </button> */}
          <button style={{background: 'lightblue'}} type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestForm;
