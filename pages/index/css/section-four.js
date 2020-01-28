import styled from "styled-components";

const Styles = styled.div`
  .section-four {
    position: relative;
    background: #ffffff;
  }
  .photos-grid {
    margin: 0px auto;
    display: grid;
    width: 100%;
    min-height: 400px;
    height: calc(100vh - 40px);
    max-height: 750px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2px;
  }
  .grid-item {
    display: block;
    position: relative;
  }

  .grid-item > div {
    display: block;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .grid-item:first-child {
    grid-area: 1 / 1 / 3 / 4;
  }

  .grid-item:nth-child(2) {
    grid-area: 3 / 1 / 5 / 3;
  }

  .grid-item:nth-child(3) {
    grid-area: 3 / 3 / 3 / 3;
  }

  .grid-item:nth-child(4) {
    grid-area: 4 / 3 / 4 / 3;
  }

  .grid-item:nth-child(5) {
    grid-area: 5 / 1 / 5 / 1;
  }

  .grid-item:nth-child(6) {
    display: none;
  }
  .gallery-info {
    text-align: left;
    padding: 16px;
    background-color: #ff6f00;
    color: white;
    z-index: 1;
    grid-area: 5 / 2 / 5 / 4;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .gallery-info h2 {
    font-size: 24px;
  }

  .gallery-info p {
    font-size: 16px;
  }

  .gallery-info a {
    margin-top: 16px;
    font-size: 14px;
    color: white;
  }

  .block-with-text {
    width: 200px;
    padding-bottom: 2em;
  }

  .block-with-text p {
    height: 50px !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    line-height: 16px !important;
    max-height: 32px !important;
  }
  @media screen and (min-width: 768px) {
    #eventPhotos {
      margin: 0;
      padding: 0;
    }

    .photos-grid {
      height: calc(100vh - 64px);
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    .grid-item:first-child {
      grid-area: 1 / 1 / 1 / 3;
    }

    .grid-item:nth-child(2) {
      grid-area: 1 / 3 / 2 / 5;
    }

    .grid-item:nth-child(3) {
      grid-area: 1 / 5 / 3 / 5;
    }

    .grid-item:nth-child(4) {
      grid-area: 2 / 1 / 2 / 1;
    }

    .grid-item:nth-child(5) {
      grid-area: 2 / 2 / 2 / 2;
    }

    .grid-item:nth-child(6) {
      grid-area: 3 / 1 / 3 / 3;
      display: block;
    }

    .grid-item:nth-child(8) {
      grid-area: 3 / 4 / 3 / 6;
      display: block;
    }

    .gallery-info {
      padding: 24px;
      grid-area: 2 / 3 / 2 / 5;
    }

    .modal-dialog {
      width: 740px;
      margin-top: 100px;
      margin: 30px auto;
    }

    .right-nav-button:nth-of-type(1) {
      margin-right: -25px;
    }

    .jumbotron {
      padding: 48px 0;
    }

    .container .jumbotron,
    .container-fluid .jumbotron {
      padding-left: 60px;
      padding-right: 60px;
    }

    .jumbotron h1,
    .jumbotron .h1 {
      font-size: 63px;
    }

    .jumbotron {
      padding-bottom: 0;
    }
  }
`;

export default Styles;
