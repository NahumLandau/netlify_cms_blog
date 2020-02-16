import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import {Devices} from "../layouts/styled-components";

const SpeakerModal = props => {
  Modal.setAppElement("#__next");

  const {first_name, last_name, image, position, company, description, linkedin, twitter} = props.speaker;
  const {onModalClosed} = props;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 16,
      maxWidth: "80%"
    }
  };

  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      style={customStyles}
      contentLabel="Speaker Modal"
    >
      <Styles>
        <div className="wrapper">
          <a className="close-modal" onClick={onModalClosed}>
            X
          </a>
          <div className="image">
            <img src={image} />
          </div>
          <div className="content">
            <h3>
              {`${first_name} ${last_name}`} <span>{`${position}, ${company}`}</span>
            </h3>
            <p>{description}</p>
            <hr />
            {(twitter || linkedin) && <span>{`Follow ${first_name}`}</span>}
            {twitter && (
              <a href={twitter} target="_blank">
                <img src="../img/twitter-icon.png" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank">
                <img src="../img/linkedin-icon.png" />
              </a>
            )}
          </div>
        </div>
      </Styles>
    </Modal>
  );
};
export default SpeakerModal;

const Styles = styled.div`
  .wrapper {
    display: flex;
    padding: 20px 50px;
    color: #2c2929;
  }
  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 18px;
    cursor: pointer;
    transform: scaleX(1.2);
  }
  .image img {
    width: 150px;
    margin-right: 30px;
  }
  .content {
    max-width: 70%;
  }
  .content h3 {
    font-size: 20px;
    color: #f47720;
    font-weight: 900;
    margin-top: 0;
  }
  .content h3 span {
    font-weight: 300;
  }
  .content p {
    width: 440px;
    font-size: 16px;
    line-height: 20px;
    max-width: 100%;
  }
  .content hr {
    background: linear-gradient(178.52deg, #e87221 25.25%, #f5c653 94.44%);
    border: none;
    height: 1.5px;
    margin: 20px 0;
  }
  .content a {
    display: inline-flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
  .content img {
    width: 20px;
    margin-left: 10px;
  }

  @media (${Devices.mobile}) {
    .wrapper {
      flex-direction: column;
      max-height: 400px;
      padding: 20px;
      padding: 20px;
    }
    .content {
      max-width: 100%;
    }
    .content span {
      display: inline-block;
      margin-bottom: 30px;
    }
  }
`;
