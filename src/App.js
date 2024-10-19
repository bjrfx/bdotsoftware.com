import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import AboutPage from './pages/About/AboutPage';
import ServicePage from './pages/service/ServicePage';
import TeamPage from './pages/team/TeamPage';
import WhyPage from './pages/why/WhyPage';
import Blog from './blog/Blog';
import Careers from './pages/Careers/Careers';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import LoginForm from './pages/Login/LoginForm';
import SignupForm from './pages/Signup/SignupForm';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgotPassword from './components/PasswordReset/ForgotPassword';
import PrivateRoute from './components/Auth/PrivateRoute';
import { AuthProvider } from './components/Auth/AuthContext';
import RequestAService from './pages/RequestAService/RequestAService';
function App() {
  return (
    <AuthProvider> {/* Wrap the entire Routes with AuthProvider */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/request-service' element={<RequestAService />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/why' element={<WhyPage />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        {/* <Route path='*' element={<Navigate to='/page-not-found' />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
