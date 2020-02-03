import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-two {
    height: 275px;
    background: linear-gradient(178.52deg, #e87221 25.25%, #f5c653 94.44%);
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-style: normal;
    font-size: 26px;
    line-height: 1.2;
    letter-spacing: 0.451238px;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    margin: 30px;
    margin-bottom: 0;
    font-weight: 900;
  }
  .black {
    color: #000000;
  }
  p {
    color: #ffffff;
    margin: 20px 0;
    line-height: 1.5;
    font-size: 16px;
  }
  .statistic {
    display: flex;
    color: #ffffff;
    justify-content: space-evenly;
    width: 80%;
    margin-top: 50px;
  }
  .statistic > div {
    width: 25%;
    text-align: center;
  }
  .statistic h3 {
    margin: 0;
    font-weight: 400;
    font-size: 26px;
    font-weight: 600;
  }
  .statistic h5 {
    font-size: 16px;
    line-height: 23px;
    font-weight: normal;
    text-align: center;
    margin: 0;
  }
  .statistic img {
    height: 68px;
  }

  @media (${Devices.mobile}) {
    .section-two {
      justify-content: flex-start;
      padding-top: 30px;
      height: 530px;
    }
    h3,
    h4 {
      font-size: 30px;
      text-align: center;
      line-height: 1.2;
    }
    p {
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      padding: 0 8px;
    }
    .statistic {
      flex-wrap: wrap;
    }
    .statistic > div {
      width: 49%;
      margin-bottom: 50px;
    }
  }
`;

export default Styles;
