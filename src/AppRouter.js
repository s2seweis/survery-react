import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import SurveyOverview from './components/SurveyOverview';
import SurveyEditing from './components/SurveyEditing';
import Admin from './components/Admin';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyForm/>} />
        <Route element={<SurveyEditing />} path="/overview/:userid" />
        <Route path="/overview" element={<SurveyOverview/>} />
        <Route path="/admin" element={<Admin/>} />
        {/* ### */}
        {/* ### */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
