import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Success from './components/Success/Success';
import AdminAddSurvey from './components/Admin/AddSurvey/AdminAddSurvey';
import Layout from './layout/Layout';
import TakenSurveys from './components/Public/TakenSurveys/TakenSurvey';
import AvailableSurveys
  from './components/Public/AvailableSurveys/AvailableSureys';
import AvailableForm
  from './components/Public/AvailableSurveys/Form/AvailableForm';
import SurveyResults from './components/Public/SurveyResults/SurveyResults';
import BarChart from './playground/playground';
import SurveyList from './components/Admin/SurveyList/SurveyList';
import EditSurvey from './components/Admin/EditSurvey/EditSurvey';

import Admin from './components/Admin/Admin';

import Help from './components/Public/Help/Help';

import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';

import AdminRoutes from './components/ProtectedRoutes/AdminRoutes';
import UserRoutes from './components/ProtectedRoutes/UserRoutes';
import { useSelector } from 'react-redux';


const AppRouter = () => {


  const user = useSelector(state => state.user.userData); // Assuming user data is stored in Redux store
  console.log("line:999", user);

  return (
    <Router>
      <Layout>

        <Routes>

          {/* <Route path="/" element={<Home />} /> */}

          <Route element={<UserRoutes user={user} />}>
            <Route path="/" element={<Home  />} />
          </Route>

          <Route element={<AdminRoutes user={user} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

          {/* Admin Routes         */}
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/admin-addsurvey" element={<AdminAddSurvey />} />
          <Route path="/admin/available-surveys" element={<SurveyList />} />
          <Route
            path="/admin/available-surveys/:dataid"
            element={<EditSurvey />}
          />
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
          <Route path="/help" element={<Help />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route />

          {/* ### */}
          {/* ### */}
        </Routes>

      </Layout>
    </Router>
  );
};

export default AppRouter;
