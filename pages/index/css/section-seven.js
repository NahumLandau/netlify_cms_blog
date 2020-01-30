import styled from "styled-components";

const Styles = styled.div`

  .section-seven {
    background: #f9f9f9;
    padding-top: 50px;
    padding-bottom: 60px;
  }
  h2 {
    font-size: 33px;
    line-height: 87px;
    font-weight: 900;
    margin-top:50px;
    text-align:center;
  }
  .tickets-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 200px;
  }
  .ticket {
    border: solid 1px #c3c3c3;
    width: 348px;
  }
  .ticket-title {
    font-size: 20px;
    line-height: 27px;
    background-color: #e9e9e9;
    padding: 34px 52px;
    font-weight: 700;
    text-align: center;
  }
  .ticket-price-section {
    font-size: 16px;
    line-height: 23px;
    background-color: #f7f7f7;
    padding: 23px 0;
    border-bottom: solid 0.5px #ebebeb;
    text-align: center;
  }
  .orange {
    color: #ff6f00;
    font-weight: 600;
  }
  .ticket-valid {
    font-size: 14px;
  }
  .ticket-description {
    font-size: 14px;
    line-height: 21px;
  }
  .desc {
    border-bottom: solid 0.5px #ebebeb;
    padding: 16px 20px;
    height: unset;
    text-align;
  }
  .desc .m-bold {
    font-weight: 700;
  }
  .disabled-button {
    position: relative;
    display: block;
    text-decoration: none;
    height: fit-content;
    font-size: 16px;
    padding: 8px 45px 8px 35px;
    background-color: #696766;
    user-select: none;
    cursor: default;
    color: white;
    pointer-events: none;
    text-align: center;
  } 
`;

export default Styles;
