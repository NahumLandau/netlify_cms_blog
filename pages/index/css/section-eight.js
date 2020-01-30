import styled from "styled-components";

const Styles = styled.div`
  .section-eight {
    background: #ffffff;
    padding: 50px 0 0 60px;
    text-align: center;
  }
  h2 {
    font-size: 50px;
    font-weight: 900;
  }
  h3 {
    margin-top: 30px;
    font-size: 20px;
    font-weight: normal;
  }
  .list-inline {
    padding-left: 0;
    list-style: none;
    margin-left: -5px;
    display: flex;
    justify-content: space-evenly;
  }
  .list-inline li {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16%;
    max-width: 180px;
    margin: 13px 7px;
    min-height: 158px;
    border: solid 1px #cccccc;
    transition: all 0.3s;
    filter: grayscale(1);
    overflow: hidden;
  }
  .hover14::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  .list-inline li a {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .list-inline li .partner-name {
    bottom: 8px;
    font-size: 12px;
    border-top: solid 0.5px #cccccc;
    width: 100%;
    line-height: 35px;
  }
  .list-inline li:hover {
    filter: grayscale(0);
  }
`;

export default Styles;
