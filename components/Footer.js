import React, {useEffect} from "react";
import styled from "styled-components";
import {Devices} from "../layouts/styled-components";
import RadarLogo from "./RadarLogo";

const Footer = () => {
  useEffect(() => {
    if (window.emailjs) {
      emailjs.init("user_dX7huKW88qxnJkjJ5XkRW");
    }
  }, []);

  const onDetailsSubmit = e => {
    e.preventDefault();
    const inputs = e.currentTarget;
    emailjs
      .send("gmail", "contact_us", {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value,
        subject: "Fullstack Radar Day"
      })
      .then(
        function(response) {
          alert("Thank you");
          console.log(response);
        },
        function(err) {
          alert("Sorry, message was not sent");
          console.log(err);
        }
      );
  };

  return (
    <Styles>
      <section className="footer">
        <h2>GET IN TOUCH</h2>
        <h3>We are here to answer all your questions about Tech Radar Day 2020</h3>

        <div className="form-wrapper">
          <form className="uppercase m-regular top-30" onSubmit={event => onDetailsSubmit(event)}>
            <div className="form-row">
              <textarea id="msg" name="msg" placeholder="MESSAGE" required="required"></textarea>
            </div>
            <div className="form-row personal-details m-regular">
              <input type="text" name="name" placeholder="NAME" required="required" />
              <input type="email" name="email" placeholder="EMAIL" required="required" />
            </div>
            <div className="form-row submit" id="fakeSubmitButton">
              <div className="submit-text uppercase white">
                <span>send</span>
              </div>
              <input id="submitButton" type="submit" value="send" />
            </div>
          </form>

          <RadarLogo />
        </div>

        <div className="social">
          <a href="https://www.facebook.com/TikalKnowledge?fref=ts" target="_blank">
            <img src="../img/facebook-icon.png" />
          </a>
          <a href="https://twitter.com/tikalk" target="_blank">
            <img src="../img/twitter-icon.png" />
          </a>
          <a href="https://www.linkedin.com/company/tikal-knowledge/" target="_blank">
            <img src="../img/linkedin-icon.png" />
          </a>
          <a href="https://www.meetup.com/full-stack-developer-il/" target="_blank">
            <img src="../img/meetup-icon.png" />
          </a>
        </div>
        <img className="mobile-footer-logo" src="img/octopus contact.png" />
      </section>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  .footer {
    padding: 40px 52px 40px;
    background: #2c2929;
    position: relative;
    color: #ffffff;
    background: linear-gradient(0deg, #231f20, #231f20);
  }
  .footer h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 50px;
    margin: 0;
  }
  h3 {
    width: 440px;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
  }
  .form-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .footer form {
    margin-top: 30px;
    text-transform: uppercase;
    width: 625px;
    display: flex;
    flex-direction: column;
  }
  .footer input,
  .footer textarea {
    background: transparent;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    padding: 10px;
    resize: none;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 16px;
    height: 64px;
  }
  .footer .form-row {
    display: flex;
    margin-bottom: 20px;
  }
  .footer input[type="text"] {
    margin-right: 10px;
    width: 165px;
  }
  input[type="text"],
  input[type="email"] {
    padding: 10px;
    font-size: 14px;
    color: white;
    width: 266px;
  }
  .personal-details {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .footer textarea {
    width: 441px;
    height: 159px;
  }

  .submit {
    position: relative;
    background: white;
    color: black;
    border-radius: 34px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 20px;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
  }
  input[type="submit"] {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .black {
    color: black;
  }
  .submit:hover {
    filter: brightness(160%);
  }
  .social {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 240px;
    justify-content: space-between;
  }
  input::placeholder,
  textarea::placeholder {
    color: white;
    opacity: 1;
  }
  .form-wrapper .radar-wrapper {
    top: -110px;
    margin-right: 80px;
  }
  .mobile-footer-logo {
    display: none;
  }
  @media (${Devices.tablet}) {
    .radar-wrapper {
      display: none;
    }
  }
  @media (${Devices.mobile}) {
    .footer {
      padding: 40px 20px 150px;
      background: #2c2828;
      overflow: hidden;
    }
    .footer h2 {
      text-align: center;
      font-size: 30px;
    }
    .footer h3 {
      width: 100%;
      text-align: center;
    }
    .form-wrapper {
      flex-direction: row;
    }
    .radar-wrapper {
      display: none;
    }
    .footer form {
      width: 100%;
      margin-top: 20px;
    }
    .form-row {
      flex-direction: column;
    }
    .footer input[type="text"],
    .footer input[type="email"] {
      width: 100%;
      margin: 10px 0;
    }
    .footer textarea {
      width: 100%;
    }
    .personal-details {
      margin-bottom: 10px;
    }
    .form-row.submit {
      margin: 20px auto;
      margin-top: 0;
    }
    .social {
      bottom: 100px;
      right: 15px;
      margin: 0 auto;
      margin-top: 20px;
      text-align: center;
    }
    .mobile-footer-logo {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translate(-50%);
      display: block;
    }
  }
`;
