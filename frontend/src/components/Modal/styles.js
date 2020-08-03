import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 1000px;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    background-color: #555;
    height: 200px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 20px;
      margin-top: 20px;
      color: #FFF;
    }
  }
`;
