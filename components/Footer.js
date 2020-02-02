import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Styles>
      <section className="footer">
        <h2>GET IN TOUCH</h2>
        <form
          className="uppercase m-regular top-30"
          onSubmit="onDetailsSubmit(event)"
        >
          <div className="form-row personal-details m-regular">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              required="required"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              required="required"
            />
          </div>
          <div className="form-row">
            <textarea
              id="msg"
              name="msg"
              placeholder="MESSAGE"
              required="required"
            ></textarea>
          </div>
          <div className="form-row submit" id="fakeSubmitButton">
            <div className="submit-text uppercase white">
              <span>send</span>
              <span className="black">&gt;</span>
            </div>
            <input id="submitButton" type="submit" value="send" />
          </div>
        </form>
      </section>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  .footer {
    padding: 40px 52px 40px;
    background: #2c2929;
  }
  .footer h2 {
    color: #ffffff;
    font-size: 40.625px;
    font-weight: 700;
  }
  .footer form {
    margin-top: 30px;
    text-transform: uppercase;
    width: 625px;
    display: flex;
    flex-direction: column;
  }
  .footer input {
    background: transparent;
    border: solid 0.5px white;
  }
  .footer .form-row {
    display: flex;
  }
  .footer input[type="text"] {
    flex-grow: 1;
    margin-right: 20px;
  }
  input[type="text"],
  input[type="email"] {
    padding: 10px;
    font-size: 14px;
    color: white;
    width: 50%;
  }
  .personal-details {
    font-size: 24px;
    margin-bottom: 20px;
  }
  form textarea {
    box-sizing: border-box;
    background: transparent;
    border: solid 1px white;
    width: 100%;
    height: 160px;
    color: white;
    font-size: 14px;
    padding: 10px;
    resize: none;
  }
  .submit {
    position: relative;
    border: none;
    box-sizing: border-box;
    margin-top: 10px;
    filter: brightness(100%);
    text-decoration: none;
    width: fit-content;
    height: fit-content;
    font-size: 24px;
    padding: 8px;
    background-color: #ff6f00;
    user-select: none;
    transition: 1s;
    color: white;
    cursor: pointer;
  }
  input[type="submit"] {
    pointer-events: none;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .black {
    color: black;
  }
  .submit:hover {
    filter: brightness(160%);
  }
`;
