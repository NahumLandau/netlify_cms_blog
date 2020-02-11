import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {Devices} from "../layouts/styled-components";

const Person = ({first_name, last_name, company, image, position, subject}) => {
  return (
    <Styles>
      <Fade top distance="10px">
        <div key={`${first_name}_${last_name}`}>
          <div className="head">
            <img src={image} />
            <div className="overlay"></div>
            <div className="name">
              <h3>
                {first_name}
                <span>{last_name}</span>
              </h3>
            </div>
            <h4>{company}</h4>
          </div>
          <div className="bottom">
            <span>{subject || position}</span>
          </div>
        </div>
      </Fade>
    </Styles>
  );
};

export default Person;

const Styles = styled.li`
  list-style-type: none;
  width: 25%;
  margin-left: 26px;
  padding: 0 30px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
  min-width: 350px;

  > div {
    cursor: pointer;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.15);
  }
  .head {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .overlay {
    background: none;
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  :hover > div {
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.35);
  }
  :hover .overlay {
    background: rgba(37, 32, 31, 0.5);
  }
  :hover .name {
    top: 110px;
  }
  :hover h4 {
    top: 170px;
  }
  :hover .head img {
    transform: scale(1);
  }
  .head img {
    width: 100%;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  .name {
    position: absolute;
    top: 130px;
    left: 20px;
    transition: all 0.3s ease;
  }
  .name h3 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    transition: all 0.3s;
    word-spacing: -2px;
    text-shadow: 0.5px 0.5px 0.5px #000;
    color: #ffffff;
    margin: 0;
  }
  .name h3 span {
    display: block;
    font-weight: 600;
  }
  h4 {
    margin: 0;
    font-size: 11px;
    transition: all 0.3s;
    transition-delay: 0.05s;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 200px;
    left: 20px;
  }

  .bottom {
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    padding-top: 15px;
    overflow: hidden;
    text-align: left;
  }
  @media (${Devices.tablet}) {
    list-style-type: none;
    width: 25%;
    margin-left: 6px;
    padding: 0 10px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
    min-width: 280px;
  }
  @media (${Devices.mobile}) {
    width: 100%;
    margin: 10px 0;
  }
`;
