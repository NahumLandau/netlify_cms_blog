import styled from "styled-components";

const Styles = styled.div`
  .section-eight {
    background: #ffffff;
    padding: 50px 0 60px 0;
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
    margin: 0;
    padding-left: 0;
    list-style: none;
    margin-left: -5px;
    display: flex;
    justify-content: center;
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
  .list-inline.sponsors li {
    min-height: 213px;
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
  .hover14:hover::before {
    animation: shine 0.75s;
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
  .list-inline li a {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
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
  .partner-logo {
    padding: 10px;
  }
  .partner-logo img {
    width: 100%;
  }
  .become-sponsor-btn {
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 45px 8px 35px;
    background-color: #2c2929;
    user-select: none;
    cursor: pointer;
    color: #ffffff;
    margin: 10px;
    margin-top: 40px;
  }
`;

export default Styles;
