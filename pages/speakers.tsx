import * as React from "react";
import MainLayout from "../layouts/main";
import {NextPage} from "next";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Person from "../components/Person";
import {Devices} from "../layouts/styled-components";
import SpeakerModal from "../components/SpeakerModal";
import Domains from "../components/Domains";
import {fetchApiData} from "../helpers";
interface ISpeakersProps {
  speakers: Array<any>;
}

const Speakers: NextPage<ISpeakersProps> = props => {
  const {speakers} = props;
  console.log(speakers);
  const [currSpeakerDisplay, setCurrSpeaker] = React.useState(null);

  return (
    <MainLayout>
      <Styles>
        <header>
          <Fade left distance="20px">
            <h1>SPEAKERS</h1>
          </Fade>
        </header>
        <Domains />
        <ul className="speakers">
          {speakers.map(speaker => {
            const img = `${process.env.BASE_URL}${speaker.image[0].url}`;
            return (
              <Person
                {...speaker}
                image={img}
                key={`${speaker.first_name}_${speaker.last_name}`}
                onClickFunc={() => setCurrSpeaker({...speaker, image: img})}
              />
            );
          })}
        </ul>

        {currSpeakerDisplay && <SpeakerModal speaker={currSpeakerDisplay} onModalClosed={() => setCurrSpeaker(null)} />}
      </Styles>
    </MainLayout>
  );
};

Speakers.getInitialProps = async () => {
  const speakers = await fetchApiData("speakers");
  return {speakers};
};

export default Speakers;

const Styles = styled.div`
  header {
    position: relative;
    min-height: 300px;
    margin-top: 95px;
    background-image: url(../img/speakers-bg.png);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
  }
  header h1 {
    font-size: 63px;
    color: #ffffff;
    margin-left: 115px;
    text-shadow: 1px 1px 2px #000000;
    font-weight: 900;
    top: 150px;
    position: relative;
  }
  .domains {
    width: 60%;
    margin: 40px auto !important;
  }
  .speakers {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 50px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .speakers li {
    width: 25%;
  }

  @media (${Devices.mobile}) {
    header {
      min-height: 120px;
      height: 120px;
      margin-top: 57px;
    }
    header h1 {
      font-size: 37px;
      margin-left: 20px;
      top: 60px;
      position: relative;
    }
    ul {
      flex-direction: column;
    }
    .speakers li {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`;
