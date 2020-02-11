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
  .domains {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 20px;
  }
  .domains div {
    text-align: center;
  }
  .domains span {
    display: block;
    text-align: center;
    color: #221f1f;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 10px;
  }
  .domains img {
    margin-bottom: 10px;
    max-width: 135px;
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
    .domains {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }
    p {
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
    }
    .domains div {
      margin: 20px 0;
      width: 50%;
    }
    .domains img {
      max-width: 100%;
    }
  }
`;

export default Styles;
