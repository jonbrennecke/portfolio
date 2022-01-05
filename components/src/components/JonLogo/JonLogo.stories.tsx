import React from 'react';
import styled from 'styled-components';
import { JonLogo, JonLogoContentStyle } from './JonLogo';
import { trueWhite, trueBlack } from '../../styles';

const Container = styled.div<{ logoContentStyle: JonLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${(props) =>
    props.logoContentStyle === JonLogoContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

export function JonLogoStory({
  logoContentStyle = JonLogoContentStyle.light,
}: {
  logoContentStyle: JonLogoContentStyle;
}) {
  return (
    <Container logoContentStyle={logoContentStyle}>
      <JonLogo contentStyle={logoContentStyle} />
    </Container>
  );
}

JonLogoStory.storyName = 'Standard';

JonLogoStory.argTypes = {
  contentStyle: {
    options: [JonLogoContentStyle.dark, JonLogoContentStyle.light],
    control: { type: 'radio' },
  },
};

export default {
  title: 'Logos/Jon/Standard',
  component: JonLogoStory,
};
