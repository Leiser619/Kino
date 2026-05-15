import { useMe } from "../../auth/hooks";

import { useNavigate } from "react-router-dom";




export default function UserMenu() {
const navigate = useNavigate();
const { data: user } = useMe();
  return (
    
    <div className="flex-col items-center justify-center border-2 w-full px-4 h-full">
      <div className="flex justify-center bg-black items-center w-full h-2/3" text-white>
          <img src="../../../assets/logo.png" alt="Logo" className="h-full w-auto"/>
          <button className=" text-white hover:text-blue-500 mr-6">Wybierz swoje kino</button>
          <button className=" text-white hover:text-blue-500 mr-4">Logowanie</button>
          <button className="text-white hover:text-blue-500 mr-4">Rejestracja</button>
          <input type="text" placeholder="Szukaj..." className="  text-white border-2 mr-4" name="szukaj" id="szukaj"/>
          <select id="language" name="language" className=" text-white mr-4">
            <option value="PL" selected>PL</option>
            <option value="ENG">ENG</option>
          </select>
      </div>

      <div className="w-full h-1/3 bg-gray-400 flex justify-center items-center">
          <h1 className="text-2xl font-semibold">{user}</h1>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/profile")}>Repertuar</button>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/profile")}>Oferty</button>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/profile")}>Prezenty</button>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/profile")}>Vip</button>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/profile")}>VipCard</button>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/profile")}>Bar</button>
          <button className="hover:text-blue-500 mr-4" onClick={() => navigate("/map")}>Mapa</button>
      </div>
    </div>
  );
}