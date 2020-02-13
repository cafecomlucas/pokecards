import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding: 20px 0 20px 0;
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

export const BackLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  display: block;
  width: 30%;
  min-width: 200px;
  margin: 20px auto 10px auto;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: ${color.tipoA_base};
  &:hover {
    background: ${color.tipoA_luz};
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  max-width: 980px;
  min-width: 300px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  .sideContainer {
    min-width: 300px;
    max-width: 480px;
    > img {
      width: 100%;
      min-width: 270px;
      min-height: 370px;
    }
  }
  .card-image {
    padding: 15px;
  }
  .props {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  .propContainer {
    padding: 0 20px 30px 20px;
    ul {
      list-style: none;
      li {
        padding: 5px 0;
        p {
          padding: 2px 0;
        }
      }
    }
    h2 {
      font-size: 18px;
      padding-top: 5px;
    }
    h3 {
      font-size: 16px;
      padding-top: 5px;
    }
  }
`;
