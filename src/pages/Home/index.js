import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Header, ContainerForm } from './styles';

function Home() {
  return (
    <Header>
      <h1>PokeCards!</h1>
      <ContainerForm>
        <form>
          <input type="text" placeholder="Busque um card pelo nome" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </ContainerForm>
    </Header>
  );
}

export default Home;
