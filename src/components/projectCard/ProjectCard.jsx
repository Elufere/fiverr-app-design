import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.scss";

function ProjectCard({ card }) {
  return (
    <Link to="/">
      <div className="projectCard">
        <img src={card.img} alt="" />
        <div className="info">
          <img src={card.pp} alt=""/>
          <div className="texts">
            <h2>{card.cat}</h2>
            <span>{card.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;