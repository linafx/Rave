// @flow

import React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'

import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'
import Code from 'atoms/Code'
import StyledLink, { SmartLink } from 'atoms/StyledLink'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/hero2.jpg'
import TechBannerImg from 'images/tech-banner.jpg'
import LearnThumbImg from 'images/learn-thumb.jpg'
import DevelopThumbImg from 'images/develop-thumb.jpg'

import { FaCube, FaCogs, FaCreditCard, FaCartPlus } from 'react-icons/fa'

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.large};
  ${media.medium`
    grid-template-columns: auto auto;
  `};
`

const HeroBlurbLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: ${spacing.medium};
`

const HeroButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const HeroButtonItem = styled.div`
  margin-right: ${spacing.small};
  margin-bottom: ${spacing.small};
`
const SDKLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
  grid-template-rows: repeat(5, min-content);
  align-content: end;
  justify-items: center;
`

const WhyDevelopLayout = styled.div`
  padding-top: ${spacing.large} !important;
  display: grid;
  grid-gap: ${spacing.medium};
  max-width: 900px;
`

const FeaturesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: ${spacing.medium};
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
`

const Feature = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-gap: ${spacing.small};
`

const GetStartedLayout = styled.div`
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  display: grid;
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.medium};
  ${media.medium`
    grid-template-columns: .5fr .5fr;
  `};
`

const StartedInfo = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: ${spacing.small};
  padding: ${spacing.medium};
  text-align: center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr min-content;
  justify-items: center;
  grid-gap: ${spacing.medium};
`

const BubbleImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 3px solid ${props => props.theme.primary};
`

type Props = {
  location: Object,
}

const IndexPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <Hero image={HeroImg}>
      <HeroLayout>
        <HeroBlurbLayout>
          <H3 primary> ravencoin.online Developer Platform</H3>
          <H1 background>
            Change the world with <br /> Ravencoin
          </H1>
          <H3 background>Developer Tooling, Cloud, and Market</H3>
          <HeroButtonLayout>
            <HeroButtonItem>
              <StyledLink to="/rvnbox">
                <Button round>RVNBOX SDK</Button>
              </StyledLink>
            </HeroButtonItem>
          </HeroButtonLayout>
        </HeroBlurbLayout>
        <SDKLayout>
          <H3 background centerVertical>
            <FaCube />
            &nbsp; RVNBOX SDK
          </H3>
          <SmartLink to="https://www.npmjs.com/package/rvnbox-sdk">
            Install via NPM
          </SmartLink>
          <Code language="bash">npm install -g rvnbox-sdk</Code>
        </SDKLayout>
      </HeroLayout>
    </Hero>

    <Container>
      <WhyDevelopLayout>
        <H2 isTitle>Why develop on Ravencoin?</H2>
        <Text>
          Money is critical to the Human Condition. Ravencoin and Blockchain
          technology enable financial sovereignty in a way which is unique in
          history.
        </Text>
        <Text>
          Ravencoin is the soundest money the world has ever known. As a
          developer you can make it available to all people, whatever their age,
          gender, nationality or financial status.
        </Text>
      </WhyDevelopLayout>
      <FeaturesLayout>
        <Feature>
          <H3>
            <FaCogs />
            &nbsp; Build on RVN
          </H3>
          <Text muted2>
            Leverage the blockchain to build decentralized and censorship
            resistant applications. Help bring financial sovereignty to every
            corner of the world.
          </Text>
        </Feature>
        <Feature>
          <H3>
            <FaCreditCard />
            &nbsp; Create Transactions
          </H3>
          <Text muted2>
            RVNBOX supports all standard transaction types including P2PK,
            P2PKH, P2MS, P2SH and nullData as well as having full support for
            all Ravencoin OP codes. Send or receive any amount of money with
            anyone else, anywhere on the planet, conveniently and without
            restriction.
          </Text>
        </Feature>
        <Feature>
          <H3>
            <FaCartPlus />
            &nbsp; BCommerce Solutions
          </H3>
          <Text muted2>
            Blockchain commerce is the future of online business. Ravencoin is
            the money of the Internet Nation. Together they enable an entirely
            new class of application.
          </Text>
        </Feature>
        <Feature>
          <H3>
            <FaCube />
            &nbsp; On chain applications
          </H3>
          <Text muted2>
            Distributed, immutable, decentralized???the blockchain offers
            capabilities which are extremely powerful. Take your application to
            the next level with Ravencoin.
          </Text>
        </Feature>
      </FeaturesLayout>
    </Container>
    <Hero image={TechBannerImg}>
      <H2 background isTitle>
        Get Started Today!
      </H2>
      <GetStartedLayout>
        <StartedInfo>
          <H3>Learn</H3>
          <BubbleImg src={LearnThumbImg} />
          <Text>
            Build the foundation of knowledge needed to create world changing
            apps. Tutorials, blog posts, video streams and code snippets to help
            you go from being a hobbyist to a professional step by step.
          </Text>
          <StyledLink to="/learn">
            <Button round>Learn</Button>
          </StyledLink>
        </StartedInfo>
        <StartedInfo>
          <H3>Develop</H3>
          <BubbleImg src={DevelopThumbImg} />
          <Text>
            With the power of Ravencoin, the ease of RVNBOX and the
            ravencoin.online developer platform, you???ll create your most
            innovative apps ever.
          </Text>
          <StyledLink to="/develop">
            <Button round style={{ alignSelf: 'end' }}>
              Develop
            </Button>
          </StyledLink>
        </StartedInfo>
      </GetStartedLayout>
    </Hero>
  </DefaultLayout>
)

export default IndexPage
