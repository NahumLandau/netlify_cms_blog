import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .container {
    background: #2c2929;
  }
  .section-one {
    padding-top: 100px;
    padding-bottom: 160px;
  }
  .section-one > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-one > div:nth-child(1) > .text {
    width: 50%;
    margin-top: 90px;
    margin-left: 20px;
  }

  .section-one-container >div:nth-child(1) {
    top: 70px;
    position:relative;
    width: 50%;
    left:110px;
  }
  .discount-notification {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin-top: 15px;
  }
  h1 {
    color: #ffffff;
    font-weight: 900;
    font-size: 50px;
    line-height: 1;
    margin: 10px 0;
    margin-bottom: 42px;
  }
  h2 {
    color: #ff6f00;
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 24px;
  }
  h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
  }
  .orange {
    color: #ff6f00;
  }
  a {
    color: #03a9f4;
    margin-top: 20px;
    display: block;
  }
  .get-tickets-btn a {
    position: relative;
    display: block;
    background: linear-gradient(90deg, #E87221 0%, #E9A35C 98%);
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
    margin-top: 30px;
  }
  .icon-arrow-down {
    width: 32px;
    height: 32px;
    transition: all 0.5s;
    fill: #ffffff;
    position: absolute;
    left: 50%;
    padding-top: 100px;
    transform: translate(-50%, 0);
    animation: arrowDown 3s infinite;
  }
  @keyframes arrowDown {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
      margin-top: 20px;
    }
    50% {
      opacity: 1;
      margin-top: 20px;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes scan {
    0% {
      transform: translate3d(0, 0, 0) rotate(270deg);
    }

    100% {
      transform: translate3d(0, 0, 0) rotate(-90deg);
    }
  }

  @keyframes scan {
    0% {
      transform: translate3d(0, 0, 0) rotate(270deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(-90deg);
    }
  }

  @keyframes elevate {
    0% {
      transform: translateY(25px);
    }
    50% {
      transform: translateY(42px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @-webkit-keyframes elevate {
    0% {
      -ms-transform: translateY(25px);
      -webkit-transform: translate(0px, 25px);
      -moz-transform: translateY(25px);
      -o-transform: translateY(25px);
    }

    50% {
      -ms-transform: translateY(42px);
      -webkit-transform: translate(0px, 42px);
      -moz-transform: translateY(42px);
      -o-transform: translateY(42px);
    }

    100% {
      -ms-transform: translateY(0px);
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translateY(0px);
      -o-transform: translateY(0px);
    }
  }
  @media (${Devices.laptop}) {
    .section-one-container >div:nth-child(1){
      left: 0;
      width:60%;
    }
    .section-one > div:nth-child(1) > .text {
      margin-left: 0px;
    }
  }

  @media (${Devices.mobile}) {
    .section-one {
      padding-bottom: 60px;
    }
    .section-one > div:nth-child(1) {
      flex-direction: column;
      left: 0;
      width: 100%;
    }
    .section-one-container >div:nth-child(1){
      left:0;
      top:0;
      width:100%;
    }
    .section-one-container {
      width:100%;
      left:0
    }
    .section-one .radar-wrapper {
      width: unset;
      height: unset;
      padding: 0;
    }
    .section-one .radar-outer {
      width: 320px;
      height: 320px;
      margin: 0 auto;
    }
    .section-one .radar-outer .text {
      width: 100%;
      height: 100%;
    }
    .section-one > div:nth-child(1) > .text {
      width: 100%;
      margin: 0;
    }
    .section-one .spinner-outer {
      top: 28px;
      left: 29px;
    }
    .section-one .radar-outer .octopus {
      margin: 35px 58px;
    }
    .text {
      text-align: center;
    }
    .text h1 {
      font-size: 32px;
      margin: 10px auto;
      margin-top: 40px;
    }
    .text h2 {
      font-size: 24px;
    }
    .text h3 {
      font-size: 16px;
    }
    .get-tickets-btn a {
      margin: 30px auto;s
    }
    .icon-arrow-down {
      display: none;
    }
  }
`;

export default Styles;
