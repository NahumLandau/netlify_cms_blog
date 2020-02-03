import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-eight {
    background: #ffffff;
    padding: 50px 0 60px 100px;
    text-align: left;
    color: #ffffff;
    background-image: url(/img/sponsors-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 27px;
  }
  p {
    width: 440px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
  }
  .get-tickets-button {
    position: relative;
    display: block;
    background: linear-gradient(90deg, #e87221 0%, #e9a35c 98%);
    border-radius: 34px;
    color: white;
    font-size: 15px;
    line-height: 15px;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    height: fit-content;
    padding: 10px 17px;
    user-select: none;
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    transition: 1s all;
  }
  p:nth-of-type(2) {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  a {
    color: #f5c653;
  }
  .seperator {
    height: 1px;
    width: 440px;
    background-color: white;
  }
  .main-orgenizers {
    margin-top: 28px;
    margin-bottom: 57px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .main-orgenizers > div {
    margin-right: 26px;
  }
  .white-logo {
    display: block;
  }
  .black-logo {
    display: none;
  }

  /* h2 {
    font-size: 50px;
    font-weight: 900;
  }
  h3 {
    margin-top: 30px;
    font-size: 20px;
    font-weight: normal;
  }
  .list-inline {
    margin: 0;
    padding-left: 0;
    list-style: none;
    margin-left: -5px;
    display: flex;
    justify-content: center;
  }
  .list-inline li {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16%;
    max-width: 180px;
    margin: 13px 7px;
    min-height: 158px;
    border: solid 1px #cccccc;
    transition: all 0.3s;
    filter: grayscale(1);
    overflow: hidden;
  }
  .list-inline.sponsors li {
    min-height: 213px;
  }
  .hover14::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  .hover14:hover::before {
    animation: shine 0.75s;
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
  .list-inline li a {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }
  .list-inline li .partner-name {
    bottom: 8px;
    font-size: 12px;
    border-top: solid 0.5px #cccccc;
    width: 100%;
    line-height: 35px;
  }
  .list-inline li:hover {
    filter: grayscale(0);
  }
  .partner-logo {
    padding: 10px;
  }
  .partner-logo img {
    width: 100%;
  }
  .become-sponsor-btn {
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 45px 8px 35px;
    background-color: #2c2929;
    user-select: none;
    cursor: pointer;
    color: #ffffff;
    margin: 10px;
    margin-top: 40px;
  }*/

  @media (${Devices.mobile}) {
    .section-eight {
      background: #ffffff;
      width: 100%;
      padding: 50px 0 10px;
      color: #000000;
      text-align: center;
    }
    h2 {
      font-size: 30px;
      line-height: 50px;
      margin-bottom: 10px;
    }
    p {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    .get-tickets-button {
      margin: 0 auto;
    }
    .list-inline {
      flex-wrap: wrap;
    }
    .list-inline li {
      width: 40%;
    }
    .seperator {
      background: #000000;
      width: 80%;
      margin: 0 auto;
    }
    .main-orgenizers {
      align-items: center;
      flex-direction: column;
    }
    .main-orgenizers div {
      margin: 0;
      text-align: center;
    }
    .white-logo {
      display: none;
    }
    .black-logo {
      display: block;
    }
  }
`;

export default Styles;
