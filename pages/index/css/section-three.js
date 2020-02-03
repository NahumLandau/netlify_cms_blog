import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-three {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 30px 110px;
  }
  .right,
  .left {
    width: 50%;
  }
  .right {
    text-align: left;
    margin-left: 40px;
  }
  h3 {
    text-align: left;
    font-size: 50px;
    line-height: 56px;
    margin-bottom: 10px;
    font-weight: 900;
  }
  .orange {
    color: #ff6f00;
  }
  h2 {
    font-size: 20px;
    font-weight: 900;
    margin: 0;
    line-height: 1;
  }
  p {
    font-size: 16px;
    line-height: 1.2;
    padding-right: 70px;
    width: 75%;
    margin-bottom: 50px;
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

  @media (${Devices.mobile}) {
    .section-three {
      flex-direction: column;
      padding: 20px;
      text-align: center;
      padding-bottom: 60px;
    }
    .left,
    .right {
      width: 100%;
      margin-left: 0px;
    }
    .right {
      margin-top: 60px;
    }
    .hide-in-mobile {
      display: none;
    }
    h3 {
      text-align: center;
      font-size: 30px;
      line-height: 1;
    }
    p {
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }
    .get-tickets-button {
      margin: 0 auto;
    }
    img {
      max-width: 270px;
      margin: 0 auto;
      display: block;
    }
  }
`;

export default Styles;
