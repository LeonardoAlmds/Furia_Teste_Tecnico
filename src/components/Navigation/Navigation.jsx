import "./Navigation.css";
import { FaHouse } from "react-icons/fa6";
import { FaSearch, FaRobot } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="navigation">
      <nav className="navbar">
        <button onClick={() => handleNavigation("")}><FaHouse /> Pagina Inicial</button>
        <button onClick={() => handleNavigation("bot")}><FaRobot /> Pantera Responde</button>
        <button onClick={() => handleNavigation("explore")}><FaSearch /> Explorar</button>
        <button onClick={() => handleNavigation("messages")}><SlEnvolope /> Mensagens</button>
        <button onClick={() => handleNavigation("notifications")}><IoNotifications /> Notificações</button>
      </nav>
    </div>
  );
};

export default Navigation;
