import styled from "styled-components";

const Styles = styled.div`
  .section-two {
    height: 810px;
    background: #f0631b url(../img/middle-bg.jpg) center top no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3, h4 {
    font-size: 50px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 2px;
    font-weight: 900;
    margin: 0;
  }
  h4 {
    color: #ffffff;
  }
  .black {
    color: #000000;
  }
  p{
    color: #ffffff;
    margin: 20px 0;
    line-height: 1.5;
    font-size: 16px;
  }
  .statistic{
    display: flex;
    color: #ffffff;
    justify-content: space-evenly;
    width: 90%;
  }
  .statistic > div {
    border-right: dotted white 1px;
    width: 25%;
  }
  .statistic > div:last-child {
    border: none;
  }
  .statistic h5 {
    font-size: 16px;
    line-height: 23px;
    font-weight: normal;
    margin: 5px;
    text-align:center;
  }
`;

export default Styles;
