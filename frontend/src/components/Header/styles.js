import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
  
  a {
    margin-left: 20px;
    font-size: 20px;
    text-decoration: none;
    color: #111;
    transition: all 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;
