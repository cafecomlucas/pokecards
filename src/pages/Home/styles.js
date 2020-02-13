import styled, { css } from 'styled-components';

const color = {
  tipoA_base: '#002F4D',
  tipoA_luz: '#005070',
  tipoB_base: '#e6e345',
  tipoC_base: '#e64546',
};

export const Header = styled.header`
  background: ${color.tipoC_base};
  margin: 0 auto;
  text-align: center;
  padding: 20px 0 60px 0;
  position: relative;
  h1 {
    color: ${color.tipoB_base};
    text-shadow: ${color.tipoA_base} 4px 0px 0px,
      ${color.tipoA_base} 3.87565px 0.989616px 0px,
      ${color.tipoA_base} 3.51033px 1.9177px 0px,
      ${color.tipoA_base} 2.92676px 2.72656px 0px,
      ${color.tipoA_base} 2.16121px 3.36588px 0px,
      ${color.tipoA_base} 1.26129px 3.79594px 0px,
      ${color.tipoA_base} 0.282949px 3.98998px 0px,
      ${color.tipoA_base} -0.712984px 3.93594px 0px,
      ${color.tipoA_base} -1.66459px 3.63719px 0px,
      ${color.tipoA_base} -2.51269px 3.11229px 0px,
      ${color.tipoA_base} -3.20457px 2.39389px 0px,
      ${color.tipoA_base} -3.69721px 1.52664px 0px,
      ${color.tipoA_base} -3.95997px 0.56448px 0px,
      ${color.tipoA_base} -3.97652px -0.432781px 0px,
      ${color.tipoA_base} -3.74583px -1.40313px 0px,
      ${color.tipoA_base} -3.28224px -2.28625px 0px,
      ${color.tipoA_base} -2.61457px -3.02721px 0px,
      ${color.tipoA_base} -1.78435px -3.57996px 0px,
      ${color.tipoA_base} -0.843183px -3.91012px 0px,
      ${color.tipoA_base} 0.150409px -3.99717px 0px,
      ${color.tipoA_base} 1.13465px -3.8357px 0px,
      ${color.tipoA_base} 2.04834px -3.43574px 0px,
      ${color.tipoA_base} 2.83468px -2.82216px 0px,
      ${color.tipoA_base} 3.44477px -2.03312px 0px,
      ${color.tipoA_base} 3.84068px -1.11766px 0px,
      ${color.tipoA_base} 3.9978px -0.132717px 0px;
    font-size: 36px;
  }
`;

export const ContainerForm = styled.div`
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
  form {
    display: flex;
    justify-content: center;
  }
  input {
    margin-left: 20px;
    font-size: 16px;
    height: 50px;
    min-width: 220px;
    width: 480px;
    padding: 0 20px;
    border-radius: 4px;
    border: 4px solid ${color.tipoA_base};
    color: ${color.tipoA_base};
    border-radius: 4px;
    ${props =>
      props['data-loading'] &&
      css`
        border-color: #808080;
      `}
  }
  button {
    margin-right: 16px;
    font-size: 16px;
    position: relative;
    left: -4px;
    height: 50px;
    text-align: center;
    color: #fff;
    border: 4px solid ${color.tipoA_base};
    border-left: 0;
    background: ${props =>
      props['data-loading'] ? '#808080!important' : color.tipoA_base};
    padding: 0 20px;
    border-radius: 4px;
    ${props =>
      props['data-loading'] &&
      css`
        border-color: #808080;
        cursor: default;
      `}
    &:hover {
      background: ${color.tipoA_luz};
    }
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  padding-top: 20px;
  max-width: 980px;
  min-width: 300px;
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    li {
      min-width: 260px;
      margin: 40px 10px;
      border-radius: 4px;
      border: 2px solid ${color.tipoA_base};
      background: #f7f7f7;
      .infos {
        padding: 10px 0 20px 0;
        min-height: 120px;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        span {
          text-align: center;
          margin-bottom: 4px;
        }
        .name {
          font-size: 18px;
          padding-bottom: 6px;
          border-bottom: 2px solid #f0f0f0;
        }
        .type {
          font-size: 16px;
          padding: 6px 0;
        }
        .id {
          padding-top: 6px;
          font-size: 12px;
        }
      }
      .imgContainer {
        max-width: 260px;
        width: 100%;
        padding: 10px;
        min-height: 360px;
        img {
          transition: transform 0.3s ease-in-out;
        }
        a:hover {
          img {
            transform: scale(1.05);
          }
        }
      }
      img {
        width: 100%;
      }
      > a {
        text-decoration: none;
        font-size: 18px;
        display: block;
        width: 100%;
        padding: 20px 0;
        text-align: center;
        color: #fff;
        background: ${color.tipoA_base};
        &:hover {
          background: ${color.tipoA_luz};
        }
      }
    }
  }
`;
