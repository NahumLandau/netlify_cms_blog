import styled from "styled-components";

const Styles = styled.div`
  .section-five {
    background-color: #eaeaea;
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
    margin-bottom: 30px;
  }
  .orange {
    color: #ff6f00;
  }
  h4 {
    font-size: 20px;
    line-height: 27px;
    margin-top: 37px;
    font-weight: normal;
    margin: 0;
  }
  .domains {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 60px 20px;
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
  }
  .domains img {
    margin-bottom: 10px;
    max-width: 135px;
  }
  .speakers {
    width: 80%;
    padding-bottom: 60px;
  }
  .speakers ul {
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .speakers li {
    list-style-type: none;
    margin: 10px 20px;
    text-align: center;
    width: 25%;
  }
  .speakers img {
    width: 140px;
    height: 140px;
    margin: 13px auto 17px auto;
    overflow: hidden;
    border-radius: 50%;
  }
  .speakers h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  .speakers h4 {
    font-size: 14px;
    line-height: 1;
  }
  .company {
    text-transform: capitalize;
  }
  .action-buttons {
    display: flex;
    justify-content: center;
  }
  .action-buttons a {
    display: block;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 45px 8px 35px;
    background-color: #2c2929;
    user-select: none;
    cursor: pointer;
    color: #ffffff;
    margin: 10px;
  }
`;

export default Styles;
