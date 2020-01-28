import styled from "styled-components";

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
    justify-content: space-around;
  }
  .radar-wrapper {
    width: 510px;
    height: 510px;
    padding-left: 40px;
  }
  .radar-outer {
    width: 490px;
    height: 490px;
    position: relative;
  }
  .radar-outer .text {
    width: 490px;
    height: 490px;
    position: absolute;
    top: 0;
    left: 0;
    content: url(../img/radar_text.png);
  }
  .radar-outer .radar {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 0.5%,
      transparent 13%,
      #cccccc 13.5%,
      transparent 14%,
      transparent 25%,
      #cccccc 25.5%,
      transparent 26%,
      transparent 26%,
      transparent 35%,
      #cccccc 35.5%,
      transparent 36%,
      transparent 36%,
      transparent 46%,
      #cccccc 46.5%,
      transparent 47%,
      transparent 47%,
      transparent 58%,
      #cccccc 58.5%,
      transparent 59%,
      rgba(125, 185, 232, 0) 100%
    );
    overflow: hidden;
  }
  .spinner-outer {
    position: absolute;
    width: 82%;
    height: 82%;
    border-radius: 50%;
    top: 44px;
    left: 45px;
    border: solid 1px transparent;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
  }
  .radar-outer .spinner {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 50%;
    background: linear-gradient(55deg, rgba(0, 192, 0, 0) 30%, #ff6f00) 0% 0/50%
      50%;
    background-repeat: no-repeat;
    transform-origin: 0 0;
    animation: scan 2s linear forwards;
    border-right: 1px solid #fe885f;
  }

  .radar-outer .octopus {
    position: absolute;
    margin: 60px 90px;
    content: url(../img/radar_timi.png);
    width: 65%;
    height: 65%;
    animation: elevate 2s ease-in-out forwards alternate;
    animation-iteration-count: 2;
  }

  .radarContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 90px;
    text-align: unset;
  }
  h1 {
    color: #ffffff;
    font-weight: 900;
    font-size: 50px;
    line-height: 1;
    margin: 10px 0;
  }
  h2 {
    color: #ff6f00;
    font-weight: 900;
    font-size: 20px;
  }
  h3 {
    color: #ffffff;
    font-size: 18px;
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
    background-color: #757472;
    color: white !important;
    margin-top: 30px;
    position: relative;
    display: block;
    text-decoration: none;
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    padding: 8px 45px 8px 35px;
    background-color: #ff6f00;
    user-select: none;
    cursor: pointer;
    transition: 1s all;
    text-transform: uppercase;
    font-weight: 700;
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
`;

export default Styles;
