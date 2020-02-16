import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-five {
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
  }
  h3 {
    font-size: 50px;
    text-align: center;
    font-weight: 900;
    margin: 0;
  }
  .orange {
    color: #ff6f00;
  }
  h4 {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
    color: #f47720;
    margin-bottom: 30px;
  }
  p {
    width: 893px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin: 0 auto 47px auto;
    max-width: 100%;
  }

  @media (${Devices.mobile}) {
    h3 {
      line-height: 1;
      font-size: 30px;
      padding: 0 63px;
      margin-bottom: 16px;
    }
    h4 {
      text-align: center;
    }
  }
`;

export default Styles;
