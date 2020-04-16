import React from 'react';
import styled, { css } from 'styled-components';
import { Heading } from '../Heading';
import { trueWhite, unit, colorToRGBA, trueBlack } from '../../styles';
import { Text } from '../Text';
import { ViewButton } from '../ViewButton';

export interface CaseStudyCardProps {
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Logo = styled.div`
  height: ${unit * 7}px;
  padding-bottom: ${unit * 3}px;
  box-sizing: content-box;

  & > * {
    height: 100%;
  }
`;

const Title = styled(Heading)`
  font-size: ${unit * 4}px;
  color: ${trueWhite};
  line-clamp: 2;
  -webkit-line-clamp: 2;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  white-space: normal;
`;

const Body = styled(Text)`
  font-size: ${unit * 2}px;
  color: ${trueWhite};
`;

const Tags = styled.div`
  display: inline-block;
  padding-top: ${unit * 3}px;

  & > *:not(:first-child) {
    margin-left: ${unit}px;
  }
`;

const ViewCaseStudyButton = styled(ViewButton)``;

const borderShadowCss = css`
  filter: drop-shadow(0px 6px 45px ${colorToRGBA(trueBlack, 0.06)});
`;

const darkerBorderShadowCss = css`
  filter: drop-shadow(0px 6px 45px ${colorToRGBA(trueBlack, 0.18)});
`;

const ImageContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  transition: 250ms transform ease-in-out, 250ms filter ease-in-out;
  ${borderShadowCss}

  & > * {
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    transform: translateY(-50%);
  }

  &:first-child {
    transform: rotateY(7deg) rotateX(-5deg);
  }

  &:not(:first-child) {
    transform: rotateY(-14deg) rotateX(8deg);
  }
`;

const TextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: ${unit * 3}px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: ${unit * 7}px;
  perspective: 1500px;
  border-radius: ${unit}px;
  padding: ${unit * 5}px ${unit * 7}px;
  height: 525px;

  &:hover {
    ${ImageContent}:first-child {
      ${darkerBorderShadowCss}
      transform: rotateY(18deg) rotateX(7deg) scale(1.07);
    }

    ${ImageContent}:not(:first-child) {
      ${darkerBorderShadowCss}
      transform: rotateY(-18deg) rotateX(12deg) scale(1.10);
    }
  }

  & > ${Title} {
    margin-top: ${unit * 3}px;
  }

  & > ${Body} {
    margin-top: ${unit * 3}px;
  }
`;

interface CaseStudyCardSubComponents {
  Logo: typeof Logo;
  Title: typeof Title;
  Body: typeof Body;
  Tags: typeof Tags;
  ImageContent: typeof ImageContent;
  TextContent: typeof TextContent;
  ViewCaseStudyButton: typeof ViewCaseStudyButton;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> &
  CaseStudyCardSubComponents = ({
  className,
  children,
}: CaseStudyCardProps) => (
  <Container className={className}>{children}</Container>
);

CaseStudyCard.Logo = Logo;
CaseStudyCard.Title = Title;
CaseStudyCard.Body = Body;
CaseStudyCard.Tags = Tags;
CaseStudyCard.ImageContent = ImageContent;
CaseStudyCard.TextContent = TextContent;
CaseStudyCard.ViewCaseStudyButton = ViewCaseStudyButton;
