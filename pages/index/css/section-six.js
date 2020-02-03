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
  }
  li {
    width: 25%;
    position: relative;
    cursor: pointer;
    height: 407px;
    transition: all 0.5s ease;
  }
  li .overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(232, 114, 33, 0.84);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease;
    color: #ffffff;
  }
  li:hover .overlay {
    opacity: 1;
  }
  li .image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  li .overlay span {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }
  li .overlay small {
    font-size: 20px;
    font-weight: 400;
  }

  li img {
    max-width: 100%;
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

  @media (${Devices.mobile}) {
    .section-six {
      padding: 50px 0 60px;
    }
    h2 {
      font-size: 45.5px;
    }
    ul.speakers {
      flex-direction: column;
    }
    li {
      width: 100%;
    }
  }
`;

export default Styles;
