import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-six {
    background: #ffffff;
    padding-top: 50px;
    padding-bottom: 60px;
    text-align: center;
  }
  h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .speakers {
    display: flex;
    flex-direction: row-reverse;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    width: 25%;
    position: relative;
    cursor: pointer;
    height: 407px;
    transition: all 0.5s ease;
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
    font-style: normal;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 80px;
  }
  @media (${Devices.laptop}) {
    .speakers {
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: row;
    }
    li {
      min-width: 360px;
      max-width: 360px;
      height: 360px;
    }
  }

  @media (${Devices.mobile}) {
    .section-six {
      padding: 0px 0 60px;
    }
    h2 {
      font-size: 45.5px;
      display: none;
    }
    ul {
      margin-top: 0;
    }
    li {
      width: 50%;
      max-width: 50%;
      min-width: 50%;
    }
  }
`;

export default Styles;
