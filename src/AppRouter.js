import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SurveyForm from './components/SurveyForm/SurveyForm';
import Home from './components/Home/Home';
import Success from './components/Success/Success';
import AdminAddSurvey from './components/AdminAddSuvey/AdminAddSurvey';

import Layout from './layout/Layout';

import TakenSurveys from './components/Public/TakenSurveys/TakenSurvey';
import AvailableSurveys
  from './components/Public/AvailableSurveys/AvailableSureys';

import AvailableForm
  from './components/Public/AvailableSurveys/Form/AvailableForm';

import SurveyResults from './components/Public/SurveyResults/SurveyResults';
import BarChart from './playground/playground';
import SurveyList from './components/AdminAddSuvey/SurveyList/SurveyList';
import EditSurvey from './components/AdminAddSuvey/EditSurvey/EditSurvey';

const AppRouter = () => {
  return (
    <Router>
      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          {/* Admin Routes         */}
          <Route path="/admin" element={<AdminAddSurvey />} />
          <Route path="/admin/available-surveys" element={<SurveyList />} />
          <Route path="/admin/available-surveys/:dataid" element={<EditSurvey />} />
          <Route path="/playground" element={<BarChart />} />

          {/* User Routes */}
          <Route path="/taken-surveys" element={<TakenSurveys />} />
          <Route path="/taken-surveys/:dataid" element={<SurveyResults />} />
          <Route path="/available-surveys" element={<AvailableSurveys />} />
          <Route
            path="/available-surveys/:dataid"
            element={<AvailableForm />}
          />
          <Route path="/form/success" element={<Success />} />

          {/* old - just the form */}
          <Route path="/form" element={<SurveyForm />} />

          <Route />

          {/* ### */}
          {/* ### */}
        </Routes>

      </Layout>
    </Router>
  );
};

export default AppRouter;
