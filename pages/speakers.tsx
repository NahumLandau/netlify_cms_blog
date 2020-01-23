import * as React from 'react';
import MainLayout from '../layouts/main';
import { NextPage } from 'next'

interface ISpeakersProps {
  speakers: Array<any>
}

const Speakers: NextPage<ISpeakersProps> = props => {

  const {speakers} = props;

  return (
    <MainLayout>

      <div>Speakers</div>

      {speakers.map(speaker => {
        const { name, company, role, image } = speaker.attributes;
        return (
          <ul>
            <li>
              <h1>{name}</h1>
              <h3>{company}</h3>
              <h5>{role}</h5>
              <img src={image} width="150"/>
            </li>
          </ul>
        )
      })
      }
    </MainLayout>
  );
};

Speakers.getInitialProps = async () => {
  const ctx = require.context('../content/speakers', false, /\.md$/)
  const keys = ctx.keys()
  const speakers = keys.map(ctx)

  return {speakers};
}

export default Speakers;
