import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Searchbar = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "")

  const onSearchHandler = (e)=>{
    e.preventDefault();
    navigate("/course-list/"+input);
  }


  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-full">
      <img
        src={assets.search_icon}
        className="md:w-auto w-10 px-3"
        alt="search_Icon"
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="search for courcess..."
        className="w-full h-full outline-none text-gray-500/80"
      />
      <button
        // onClick={() => navigate("/course-list")}
        type="submit"
        className="bg-blue-600 rounded-full text-white md:px-10 px-7 md:py-2 py-1 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
