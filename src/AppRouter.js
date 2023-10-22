import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SurveyForm from './components/SurveyForm/SurveyForm';
import Home from './components/Home/Home';
import Overview from './components/Overview/Overview';
import Success from './components/Success/Success';
import ParentComponent from './components/AdminAddSuvey/TestParent';

import Layout from './Layout/Layout';

const AppRouter = () => {
  return (
    <Router>
      <Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/form" element={<SurveyForm />} />
        <Route path="/form/success" element={<Success />} />
        <Route path="/admin" element={<ParentComponent />} />

        <Route />

        {/* ### */}
        {/* ### */}
      </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
