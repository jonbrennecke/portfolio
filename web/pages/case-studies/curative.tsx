import {
  curativeBlue30,
  curativeBlue50,
  CurativeLogo,
  maxWidth,
  unit,
  Text,
  Heading,
  BrowserFrame,
  PhoneFrame,
  trueBlack,
  trueWhite,
} from "@portfolio/components";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Page } from "../../src/components";
import browserScreenshot from "../../assets/images/book.curative.com.png";
import laserlikeScreenshot from "../../assets/images/laserlikeScreenshot.png";
import { rgba } from "polished";

const CurativeHero = styled.div`
  display: flex;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg, ${curativeBlue50}, ${curativeBlue30});
    z-index: -1;
  }
`;

const CurativeHeroContentContainer = styled.div`
  display: flex;
  flex: 1;
  padding: ${unit * 10}px ${unit * 5}px;
  height: 70vh;
  max-width: ${maxWidth}px;
`;

const StyledCurativeLogo = styled(CurativeLogo)`
  width: 100%;
  max-width: 450px;
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${unit * 4}px;
  padding: ${unit * 4}px 0;
`;

const Browser = styled(BrowserFrame)`
  height: 450px;
  width: 450px;
  position: absolute;
  transform: rotateY(-15deg);
  filter: drop-shadow(0px 6px 45px ${rgba(trueBlack, 0.18)});
`;

const Phone = styled(PhoneFrame)`
  width: 200px;
  position: absolute;
  transform: rotateY(-15deg) translateZ(100px);
  filter: drop-shadow(0px 6px 45px ${rgba(trueBlack, 0.18)});
`;

const BrowserScreenshot = styled.div`
  background-image: url(${browserScreenshot.src});
  background-size: cover;
  width: 100%;
`;

const BrowserContainer = styled.div`
  perspective: 1500px;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  font-size: ${unit * 4}px;
`;

const StyledText = styled(Text)`
  font-size: ${unit * 3}px;
`;

function CurativeCaseStudyPage() {
  return (
    <Page>
      {({ showMenu }) => (
        <>
          <CurativeHero>
            <CurativeHeroContentContainer>
              <LogoContainer>
                <StyledCurativeLogo id="curativeLogo" contentStyle="light" />
                <Column>
                  <StyledHeading color={trueWhite}>
                    Senior Fullstack Software Engineer
                  </StyledHeading>
                  <StyledText color={trueWhite}>
                    Team Lead, Patient Experience Team
                  </StyledText>
                </Column>
              </LogoContainer>
              <BrowserContainer>
                <Browser>
                  <BrowserScreenshot />
                </Browser>

                <Phone>
                  <image
                    mask="url(#mask-10)"
                    x="3"
                    y="6"
                    width="746"
                    href={laserlikeScreenshot.src}
                  />
                </Phone>
              </BrowserContainer>
            </CurativeHeroContentContainer>
          </CurativeHero>
        </>
      )}
    </Page>
  );
}

export default CurativeCaseStudyPage;
