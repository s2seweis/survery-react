import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import AdminSurveyOverview from './components/Admin/AdminSurveyOverview';
import AdminSurveyEditing from './components/Admin/AdminSurveyEditing';
import Admin from './components/Admin/Admin';
import Home from './components/Home';
import AdminAddSurvey from './components/Admin/AdminAddSurvey';
import Overview from './components/Overview';
import Success from './components/Success';
import Playground from './components/Playground';
import ParentComponent from './components/Test/TestParent';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/playground" element={<Playground/>} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/form" element={<SurveyForm/>} />
        <Route path="/form/success" element={<Success/>} />
        <Route path="/test" element={<ParentComponent/>} />



        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/addsurvey" element={<AdminAddSurvey/>} />
        <Route path="/admin/allsurveys" element={<AdminSurveyOverview/>} />
        <Route  path="/admin/allsurveys/:userid" element={<AdminSurveyEditing />} />
        <Route path="/admin/charts" element={<AdminSurveyOverview/>} />


        
        {/* ### */}
        {/* ### */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
