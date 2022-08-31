import { Route, Routes } from 'react-router-dom';
import NotFound from './views/notFound/NotFound';
import Subjects from './views/subjects/Subjects';
import Main from './views/main/Main';
import Profile from './views/profile/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subjects" element={<Subjects />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
