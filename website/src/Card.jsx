import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/image/nature.jpg';


const Card = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={props.imgsrc} class="card-img-top card-image" alt={props.imgsrc} />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text">
                      {props.text}
                    </p>
                    <NavLink to="" className="btn btn-outline-primary">
                      Check Out
                    </NavLink>
                  </div>
                </div>
              </div>
    </>
  );
};

export default Card;
