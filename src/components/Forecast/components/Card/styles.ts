import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: column;
  text-align: center;
  background: var(--white);
  margin-top: 1rem;
  padding: 1rem;
  
  h3{
    margin-bottom: 0.5rem;
  }
  p{
    color: var(--shape);
  }
`;