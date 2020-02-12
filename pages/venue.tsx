import * as React from "react";
import MainLayout from "../layouts/main";
import styled from "styled-components";
import {Devices} from "../layouts/styled-components";
import GoogleMap from "../components/GoogleMap";

interface IVenueProps {}

export const Venue: React.FC<IVenueProps> = props => {
  return (
    <Styles>
      <div className="venue">
        <GoogleMap />

        <div className="info">
          <h1>Venue</h1>

          <ul>
            <li>12 Kaufmann Street, TLV</li>
            <li>
              <p>
                <a href="http://www.ahuzot.co.il/Parking/ParkingDetails/?ID=13" target="_blank">
                  Ha-Kovshim parking
                </a>
              </p>
            </li>

            <li>
              <p>
                <a href="http://www.ahuzot.co.il/Parking/ParkingDetails/?ID=21" target="_blank">
                  Beit Ha-Etzel parking
                </a>
              </p>
            </li>

            <li>
              <p>
                <a href="http://www.ahuzot.co.il/Parking/ParkingDetails/?ID=44" target="_blank">
                  Tkooma parking
                </a>
              </p>
            </li>

            <li>
              <p>
                5 minutes' walk from
                <br />
                Hacarmelit bus terminal
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Styles>
  );
};

const withLayout = () => (
  <MainLayout>
    <Venue />
  </MainLayout>
);

export default withLayout;

const Styles = styled.div`
  .venue {
    height: 460px;
    background: #9cebef;
    margin: 87px 0;
    position: relative;
  }
  .info {
    left: 10%;
    width: 25%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    padding: 20px;
  }
  ul {
    margin-top: 26px;
    padding: 0;
    list-style: none;
  }
  ul li,
  ul li p,
  ul li a {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 25px;
    color: inherit;
    text-decoration: none;
  }

  @media (${Devices.mobile}) {
    .venue {
      background: #2c2929;
      margin: 0;
      margin-bottom: 10px;
      margin-top: 30px;
      height: 820px;
      color: #ffffff;
    }
    .venue > div:nth-child(1) {
      height: 50%;
      position: relative;
    }
    .info {
      width: 90%;
      left: 0;
      background: #2c2929;
      position: static;
      color: #ffffff;
      transform: none;
      box-sizing: border-box;
      text-align: center;
      margin: 0 auto;
      margin-top: 30px;
      border-bottom: 1px solid #ffffff;
    }
    h1 {
      margin: 0;
      font-style: normal;
      font-weight: 900;
      font-size: 50px;
      line-height: 50px;
      text-transform: uppercase;
    }
  }
`;
