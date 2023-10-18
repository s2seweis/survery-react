import React, {useEffect, useState} from 'react';

import SimpleQuestion from '../SurveyQuestions/SimpleQuestion/SimpleQuestion';
import RadioGroup from '../SurveyQuestions/RadioGroup/RadioGroup';
import Checkbox from '../SurveyQuestions/Checkbox/Checkbox';
import Rating from '../SurveyQuestions/Rating/Rating';
import Comment from '../SurveyQuestions/Comment/Comment';


const AdminAddSurvey = ({match}) => {
  return (
    <div>

      <h1>Admin AddSurvey Area</h1>

      <h3>Add Simple Question</h3>
      <SimpleQuestion />
      <h3>Add Radio Group</h3>
      <RadioGroup />
      <h3>Add Checkbox</h3>
      <Checkbox />
      <h3>Add Ratingbox</h3>
      <Rating />
      <h3>Add Comment</h3>
      <Comment />

    </div>
  );
};

export default AdminAddSurvey;
