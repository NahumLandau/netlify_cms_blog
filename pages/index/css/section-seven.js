import styled from "styled-components";
import {Devices} from "../../../layouts/styled-components";

const Styles = styled.div`
  .section-seven {
    height: 470px;
    color: white;
    background: linear-gradient(180deg, #e97b26 3.19%, #f5c653 97.98%);
    text-align: center;
  }
  h2 {
    font-weight: 900;
    font-style: normal;
    font-size: 50px;
    padding: 50px 0;
    margin: 0;
  }
  .tickets-wrapper {
    display: flex;
    flex-direction: row;
    align-items: self-start;
    justify-content: space-around;
    padding: 0px 200px;
  }

  .tickets-wrapper .ticket {
    width: 295px;
    position: relative;
    min-height: 195px;
    color: black;
    background: #f6f6f6;
    text-transform: capitalize;
  }
  .ticket div {
    margin-top: 20px;
  }
  .tickets-section .ticket .get-tickets-button {
    color: white;
    position: absolute;
    bottom: 10px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
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
  .ticket.disabled,
  .ticket.disabled .desc .desc-second-line {
    color: #c4c4c4 !important;
  }

  .tickets-wrapper .ticket .buy-tickets-wrapper {
    position: relative;
    background-color: #231f20;
    height: 61px;
  }

  .tickets-wrapper .ticket-title {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
  }

  .ticket-price-section {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
  }

  .tickets-wrapper .old-price {
    text-decoration: line-through;
  }

  .tickets-wrapper .ticket-valid {
    font-size: 14px;
  }

  .tickets-wrapper .ticket-description {
    font-size: 14px;
    line-height: 21px;
  }

  .tickets-wrapper .desc {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }

  .tickets-wrapper .desc .desc-second-line {
    color: #f47720;
  }

  .ticket .get-tickets-button {
    color: white;
    position: absolute;
    bottom: 10px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .tickets-wrapper .desc:last-child {
    border-bottom: none;
  }

  @media (${Devices.mobile}) {
    .section-seven {
      height: auto;
      padding-bottom: 40px;
    }
    h2 {
      font-size: 30px;
      line-height: 1;
    }
    .tickets-wrapper {
      flex-direction: column;
      padding: 0;
    }
    .tickets-wrapper .ticket {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export default Styles;
