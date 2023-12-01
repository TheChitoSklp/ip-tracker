import React, { useState, useEffect } from "react";
import logoBtn from "/icon-arrow.svg";
import "./Search.css";
import { Details } from "./Details";
import { Map } from "./Map";
import patternDesktop from "/pattern-bg-desktop.png";
import { helpHttp } from "../helpers/helpHttp";

export const Search = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState(null);
  const [render, setRender] = useState(false);

  const api = `https://ipapi.co/${ipAddress}/json/`;

  const handleInputChange = (event) => {
    setIpAddress(event.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setRender(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await helpHttp().get(api);
        setIpData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (render && ipAddress) {
      fetchData();
      setRender(false);
    }
  }, [render, ipAddress, api]);

  return (
    <div className="componente-container">
      <img className="fondo-top" src={patternDesktop} alt="background" />
      <div className="form-content">
        <h3>IP Address Tracker</h3>
        <form className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Escribe la dirección IP"
            onChange={handleInputChange}
          />
          <button className="search-button" type="button" onClick={handleSend}>
            <img src={logoBtn} alt="Search Button" />
          </button>
        </form>
        {ipData && <Details ipData={ipData} />}
      </div>
      <div className="mapa">{ipData && <Map ipData={ipData} />}</div>
    </div>
  );
};
