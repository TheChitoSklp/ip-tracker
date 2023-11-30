import React from "react";
import "./Details.css";

export const Details = ({ ipData }) => {
  if (!ipData) {
    return null;
  }

  return (
    <section className="info-section">
      <div className="ip-address">
        <h4>IP ADDRESS</h4> <span>{ipData.ip || "N/A"}</span>
      </div>
      <div className="location">
        <h4>LOCATION</h4> <span>{ipData.region || "N/A"}</span>
      </div>
      <div className="timezone">
        <h4>TIMEZONE</h4> <span>{ipData.timezone || "N/A"}</span>
      </div>
      <div className="isp">
        <h4>ISP</h4> <span>{ipData.org || "N/A"}</span>
      </div>
    </section>
  );
};
