import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-four {
    position: relative;
    background: #ffffff;
    padding: 60px 0 80px;
    text-align: center;
    z-index: 0;
  }
  h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.451238px;
    text-transform: uppercase;
    margin: 0 312px 46px;
  }
  .shadow-effect {
    position: relative;
  }

  .shadow-effect:before,
  .shadow-effect:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  .shadow-effect:after {
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    right: unset;
    transform: translateX(-100%) rotate(3deg);
  }

  @media (${Devices.mobile}) {
    h2 {
      font-size: 30px;
      line-height: 30px;
      margin: 0 20px 25px;
    }

    .videoWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;
    }
    .videoWrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Styles;
