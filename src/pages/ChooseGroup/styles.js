import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.text`
  font-weight: bolder;
  font-size: 2em;
  color: white;
  text-align: center;
`;

export const SubTitle = styled.text`
  color: white;
  font-size: 2em;
  font-weight: 500;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  height: 50vh;
  padding-bottom: 2em;
  background-color: var(--color-pink);
  justify-content: center;
  align-items: center;
`;

export const Box2 = styled.div`
  flex-direction: column;

  display: flex;
  height: 50vh;
  transform: translate(0, -2em);
  border-radius: 0 2.5em 0 0;
  padding-bottom: 2em;
  background-color: var(--color-purple);
  justify-content: center;
  align-items: center;
`;

export const CenteredBox = styled.div`
  background-color: white;
  width: 70%;
  height: 24vh;
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const HighlightText = styled.text`
  font-size: 3em;
  font-weight: bolder;
`;

export const SecondaryText = styled.text`
  font-size: 2.2em;
  font-weight: 400;
`;

export const Image = styled.img`
  height: 85%;
  position: absolute;
  top: 30%;
`;