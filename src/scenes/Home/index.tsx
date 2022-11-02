import AWSLogo from "assets/amazonaws.svg";
import BrainImage from "assets/brain.svg";
import GraphQLLogo from "assets/graphql.svg";
import NodeJSLogo from "assets/nodejs.svg";
import ReactLogo from "assets/react.svg";
import RocketImage from "assets/rocket.svg";
import TerraformLogo from "assets/terraform.svg";
import TypeScriptLogo from "assets/typescript.svg";
import Bold from "components/Bold";
import React from "react";
import {
  AboutMeBlock,
  BlockImage,
  Hero,
  ImageContainer,
  LargeTag,
  Stack,
  StackIcon,
  Title,
} from "./styled";

function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Hero>
        <Title>
          <h1>Hi, I am Gabriel.</h1>
          <h2>I do code and other techy things.</h2>
        </Title>
      </Hero>
      <AboutMeBlock>
        <ImageContainer>
          <LargeTag>&lt;/&gt;</LargeTag>
        </ImageContainer>
        <div>
          <h2>A decade and a half of code.</h2>
          <p>I started my developer carrer back in 2005.</p>
          <p>
            Currently, my skillset includes{" "}
            <Bold>
              TypeScript, Next.js, NestJS, GraphQL, Terraform, AWS, and
              Kubernetes.
            </Bold>
            In short, I link to think of myself as a{" "}
            <Bold>
              FullStack developer with heavy focus on Backend and DevOps
            </Bold>
            .
          </p>
          <Stack>
            <StackIcon src={ReactLogo} title="React" />
            <StackIcon src={GraphQLLogo} title="GraphQL" />
            <StackIcon src={NodeJSLogo} title="Node.js" />
            <StackIcon src={TypeScriptLogo} title="TypeScript" />
            <StackIcon src={TerraformLogo} title="Terraform" />
            <StackIcon src={AWSLogo} title="AWS" />
          </Stack>
        </div>
      </AboutMeBlock>
      <AboutMeBlock>
        <div>
          <h2>CS Teacher and Tech Lead</h2>
          <p>
            For over six years I have been <Bold>teaching Databases I</Bold>.
            Also <Bold>coached trainees and juniors</Bold> in working
            environments. I like thinking I got a great deal of soft skills
            through that.
          </p>
          <p>
            We would not achieve anything just by ourselves, we grow only when
            people around us do it was well.
          </p>
        </div>
        <ImageContainer>
          <BlockImage src={BrainImage} alt="Brain" />
        </ImageContainer>
      </AboutMeBlock>
      <AboutMeBlock>
        <ImageContainer>
          <BlockImage src={RocketImage} alt="Rocket" />
        </ImageContainer>
        <div>
          <h2>A tech-minded entepreneur.</h2>
          <p>
            Or the way I like seeing it: I found nice people along the way to
            work with and build interesting stuff, doing what we love.
          </p>
          <p>
            As part this journey had the luck to work with and for people all
            around the world since 2010. We learned, failed and succeeded in
            many ways. And most important, enjoying it.
          </p>
        </div>
      </AboutMeBlock>
    </React.Fragment>
  );
}

export default Home;
