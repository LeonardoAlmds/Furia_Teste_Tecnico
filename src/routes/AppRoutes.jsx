import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Chatbot from '../pages/Chatbot/Chatbot';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bot" element={<Chatbot/>}/>
    </Routes>
  )
}

export default AppRoutes;