import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;

    .title {
      max-width: 320px;
      width: 100%;
      font-size: 35px;
      margin-bottom: 30px;
    }

    .information {
      max-width: 350px;
      width: 100%;
      font-size: 20px;
      margin-bottom: 30px;
    }

    a {
      max-width: 250px;
      width: 100%;
      height: 40px;
      font-size: 17px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background-color: rgb(49, 83, 170, 0.8);
      color: #FFF;
      border-radius: 3px;
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }

      .icon {
        width: 20%;
        height: 100%;
        background-color: rgb(49, 83, 170, 1);
        border-radius: 3px 0 0 3px ;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        margin-left: 20px;
      }
    }
  }

  .right {
    max-width: 600px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

