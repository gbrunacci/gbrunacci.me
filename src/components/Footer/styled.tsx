import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 3rem 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  a + a {
    margin-left: 1rem;
  }

  img {
    width: 100%;
    max-height: 100%;
  }

  small {
    font-size: 0.65rem;
  }
`;
