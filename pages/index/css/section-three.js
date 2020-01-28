import styled from "styled-components";

const Styles = styled.div`
  .section-three {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 150px 220px;
  }
  .right,
  .left {
    width: 50%;
  }
  .right {
    text-align: right;
  }
  h3 {
    text-align: left;
    font-size: 50px;
    line-height: 56px;
    margin-bottom: 30px;
    font-weight: 900;
  }
  .orange {
    color: #ff6f00;
  }
  h2 {
    font-size: 16px;
    font-weight: 900;
  }
  h2 span {
    font-weight: normal;
  }
  p {
    font-size: 15px;
    line-height: 1.2;
  }
`;

export default Styles;
