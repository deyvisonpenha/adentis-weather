import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  margin: 1rem 0 0 2rem;
  width: 16rem;
  height: 2rem;
  padding: 1rem;
  font-size: 1rem;  
  border: 0px;
  border-radius: 16px;

  &:focus {
      outline: none;
      box-shadow: 0px 0px 4px var(--blue);
  }
`;

export const LeftContent = styled.div`
  max-width: 60%;

  h2 {
    margin: 2rem 0 0 2rem;
  }
  
`;

export const RightContent = styled.div`
  max-width: 40%;

  h2 {
    margin: 4rem 0 2rem 12rem;
  }
`;