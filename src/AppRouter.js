import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SurveyForm from './components/SurveyForm/SurveyForm';
import Home from './components/Home/Home';
import Overview from './components/Overview/Overview';
import Success from './components/Success/Success';
import AdminAddSurvey from './components/AdminAddSuvey/AdminAddSurvey';

import Layout from './layout/Layout';

const AppRouter = () => {
  return (
    <Router>
      <Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/form" element={<SurveyForm />} />
        <Route path="/form/success" element={<Success />} />
        <Route path="/admin" element={<AdminAddSurvey />} />

        <Route />

        {/* ### */}
        {/* ### */}
      </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
