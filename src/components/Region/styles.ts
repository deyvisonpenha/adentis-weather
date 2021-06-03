import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-left: auto;
  height: 2rem;
  width: 5rem;
  border: 0;
  border-radius: 4rem;
  background: var(--primary);
  color: var(--white);
  font-weight: 500;
`;

export const Container = styled.div`
  margin-top: 1rem;
  
  
  table {
    border-spacing: 0 0.5rem;
    margin: 0 3rem;

    thead {
      color: gray;
    }

    td {
      padding: 1rem 2rem;
      width: 18rem;
      border: 0;
      text-align: left;
    }

    tbody{
      td {
        color: var(--dark);
        background: var(--white);

        
    }
    }

    
  }
`;