import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {Devices} from "../layouts/styled-components";

const Person = ({first_name, last_name, company, image, position, subject, index = 0, onClickFunc = null}) => {
  return (
    <Styles>
      <Fade key={first_name + last_name} top delay={(index + 1) * 200} distance="20px">
        <div className="person" key={`${first_name}-${last_name}`} onClick={onClickFunc}>
          <div className="image" style={{backgroundImage: `url(${image})`}}></div>
          <div className="overlay">
            <span>{`${first_name} ${last_name}`}</span>
            <small>{company}</small>
          </div>
        </div>
      </Fade>
    </Styles>
  );
};

export default Person;

const Styles = styled.li`
  list-style-type: none;
  min-width: 350px;
  .speakers {
    display: flex;
    flex-direction: row-reverse;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  .person {
    position: relative;
    cursor: pointer;
    height: 407px;
    transition: all 0.5s ease;
  }
  .person .overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(232, 114, 33, 0.84);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease;
    color: #ffffff;
  }
  .person:hover .overlay {
    opacity: 1;
  }
  .person .image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .person .overlay span {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }
  .person .overlay small {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }

  .person img {
    max-width: 100%;
  }

  @media (${Devices.mobile}) {
    width: 100%;
    margin: 0;
  }
`;
