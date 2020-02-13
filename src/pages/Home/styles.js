import styled from 'styled-components';

const color = {
  bg: '#e64546',
  title: '#e6e345',
  text: '#002F4D',
};

export const Header = styled.header`
  background: ${color.bg};
  margin: 0 auto;
  text-align: center;
  padding: 20px 0 60px 0;
  position: relative;
  h1 {
    color: ${color.title};
    text-shadow: ${color.text} 4px 0px 0px,
      ${color.text} 3.87565px 0.989616px 0px,
      ${color.text} 3.51033px 1.9177px 0px,
      ${color.text} 2.92676px 2.72656px 0px,
      ${color.text} 2.16121px 3.36588px 0px,
      ${color.text} 1.26129px 3.79594px 0px,
      ${color.text} 0.282949px 3.98998px 0px,
      ${color.text} -0.712984px 3.93594px 0px,
      ${color.text} -1.66459px 3.63719px 0px,
      ${color.text} -2.51269px 3.11229px 0px,
      ${color.text} -3.20457px 2.39389px 0px,
      ${color.text} -3.69721px 1.52664px 0px,
      ${color.text} -3.95997px 0.56448px 0px,
      ${color.text} -3.97652px -0.432781px 0px,
      ${color.text} -3.74583px -1.40313px 0px,
      ${color.text} -3.28224px -2.28625px 0px,
      ${color.text} -2.61457px -3.02721px 0px,
      ${color.text} -1.78435px -3.57996px 0px,
      ${color.text} -0.843183px -3.91012px 0px,
      ${color.text} 0.150409px -3.99717px 0px,
      ${color.text} 1.13465px -3.8357px 0px,
      ${color.text} 2.04834px -3.43574px 0px,
      ${color.text} 2.83468px -2.82216px 0px,
      ${color.text} 3.44477px -2.03312px 0px,
      ${color.text} 3.84068px -1.11766px 0px,
      ${color.text} 3.9978px -0.132717px 0px;
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
    border: 4px solid ${color.text};
    color: ${color.text};
  }
  button {
    margin-right: 16px;
    font-size: 16px;
    position: relative;
    left: -4px;
    height: 50px;
    text-align: center;
    color: #fff;
    border: 4px solid ${color.text};
    background: ${color.text};
    padding: 0 20px;
    border-radius: 4px;
  }
`;
