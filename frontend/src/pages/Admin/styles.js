import styled from 'styled-components';

export const Container = styled.section`
  max-width: 850px;
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  background-color: #FFF;
  background-image: url(images/developer.png);
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: bottom right;

  h1 {
    margin: 10px 0 30px 0;
  }

  .card {
    background-color: rgba(204, 229, 255, 0.8);
    border-color: #c3e6cb;
    padding: 0 20px;
    margin-bottom: 20px;
    border-radius: 2px;
    display: flex;
    flex-wrap: wrap;

    .item {
      margin: 20px 0;
      width: 190px;

      span {
        font-size: 18px;
        color: #111;
      }

      p {
        margin-top: 10px;
        font-size: 15px;
        color: #666;
        cursor: pointer;
      }

    }
  }
`;
