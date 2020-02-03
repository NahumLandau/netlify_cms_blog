import React from "react";
import styled from "styled-components";

const RadarLogo = () => {
  return (
    <Styles>
      <div className="radar-wrapper">
        <div className="radar-outer">
          <img className="text" />
          <div className="radar">
            <div className="cross-section"></div>
            <div className="spinner-outer">
              <div className="spinner"></div>
            </div>
            <img className="octopus" />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default RadarLogo;

const Styles = styled.div`
  .radar-wrapper {
    width: 50%;
    height: 510px;
    position: relative;
    left: 0;
    top: 0;
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
    background: linear-gradient(55deg, rgba(0, 192, 0, 0) 30%, #ff6f00) 0% 0/50% 50%;
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
`;
