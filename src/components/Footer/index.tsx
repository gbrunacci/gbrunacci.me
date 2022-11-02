import React from "react";
import { Wrapper } from "./styled";
import GitHubLogo from "assets/github.svg";
import LinkedInLogo from "assets/linkedin.svg";
import AngelListLogo from "assets/angellist.svg";

function Footer(): JSX.Element {
  return (
    <Wrapper>
      <p>Gabriel Brunacci &copy; {new Date().getFullYear()}</p>
      <p>
        <a
          href="https://github.com/gbrunacci/gbrunacci.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="This Repo" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielbrunacci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="My LinkedIn Profile" />
        </a>
        <a
          href="https://angel.co/u/gabriel-brunacci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AngelListLogo} alt="My Angel List Profile" />
        </a>
      </p>
      <p>
        <small>Or drop me a line at <a href="mailto:contact@gbrunacci.me?subject=Contact+from+website">contact@gbrunacci.me</a></small>
      </p>
    </Wrapper>
  );
}

export default Footer;
