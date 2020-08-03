import styled from 'styled-components';

export const Container = styled.main`
  max-width: 850px;
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  background-color: #FFF;

  .title {
    max-width: 200px;
    width: 100%;
    font-size: 25px;
  }

  h3 {
    margin: 40px 0 10px 0;
  }

  button {
    border: 0;
    cursor: pointer;
    margin-top: 30px;
    /* max-width: 800px; */
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
      width: 5%;
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

  .form_inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input_group {
      display: flex;
      flex-direction: column;
      max-width: 250px;
      width: 100%;

      label {
        font-size: 14px;
        color: #555;
        margin: 10px 0;
        cursor: pointer;
      }

      input {
        height: 40px;
        border: solid 1px #ddd;
        width: 100%;
        padding: 0 10px;
        border-radius: 2px;

        &:focus{
          border: solid 1px #aaa;
        }
      }

      .file {
        border: solid 1px #d4edda;
        background-color: #d4edda;
      }

      .not_found {
        border: solid 1px #f5c6cb;
      }
    }
  }

  .form_file {
    width: 100%;
    
    input {
      display: none;
    }

    label {
      display: flex;
      flex-direction: column;
      padding: 20px;
      border-radius: 2px;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #F9F9F9;
      }

      span{
        font-size: 14px;
        color: #444;
      }

      img {
        width: 300px;
      }
    }

    .file {
      border: solid 1px #d4edda;
    }

    .not_found {
      border: solid 1px #f5c6cb;
    }

  }
  .not_found {
    font-size: 14px;
    color: #c00;
  }
`;
