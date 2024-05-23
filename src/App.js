import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import AboutPage from './pages/About/AboutPage';
import ServicePage from './pages/service/ServicePage';
// import TeamPage from './pages/team/TeamPage';
import WhyPage from './pages/why/WhyPage';
import Blog from './blog/Blog';
import Careers from './pages/Careers/Careers';
import PageNotFound from './pages/pageNotFound/PageNotFound';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicePage />} />
      {/* <Route path='/team' element={<TeamPage />} /> */}
      <Route path='/careers' element={<Careers />}/>
      <Route path='/why' element={<WhyPage />} />
      <Route path='/blog' element={<Blog />}/>
      <Route path='/page-not-found' element={<PageNotFound />}/>
      <Route path='*' element={<Navigate to='/page-not-found' />} />
    </Routes>
  );
}

export default App;
