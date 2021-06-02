import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContent = styled.div`
  width: 100%;
  max-width: 60%;
  background-color: var(--background);

  h2 {
    margin: 2rem 0 0 2rem;
  }

  input {
    margin: 1rem 0 0 2rem;
    width: 16rem;
    height: 2rem;
    padding: 1rem;
  }
  
`;

export const RightContent = styled.div`
  width: 100%;
  max-width: 40%;
  background: var(--success);
`;