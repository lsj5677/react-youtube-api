import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/Header.css";
import { useDarkMode } from "../context/DarkModeContext";
import { BsSearch, BsSun, BsPlayCircleFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const client = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header>
      <Link to="/" className="logo">
        <h1>Agtube</h1>
        <BsPlayCircleFill className="ml-1" />
      </Link>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          id="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search..."
        />
        <button
          className="search-button"
          onClick={() => client.invalidateQueries(["videos", false])}
        >
          <BsSearch />
        </button>
      </form>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <BsSun className="light-mode-icon" />
        ) : (
          <MdDarkMode className="dark-mode-icon" />
        )}
      </button>
    </header>
  );
}
