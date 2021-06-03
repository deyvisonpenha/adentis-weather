import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  
  strong { 
    color: var(--primary);
    font-size: 3rem;
  }

  p {
    color: var(--success);
    display: flex;
    align-self: flex-end;
    font-size: 1.5rem;
    padding-left: 0.5rem;
  }
`;
