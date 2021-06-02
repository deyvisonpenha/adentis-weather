import styled from 'styled-components';

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

        button {
          display: block;
          margin-left: auto;
        }
    }
    }

    
  }
`;