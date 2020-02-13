import React, { useState, useEffect } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import pokemon from 'pokemontcgsdk';
import { Link } from 'react-router-dom';
import { Header, ContainerForm, Section } from './styles';

function Home() {
  const [cardName, setCardName] = useState('');
  const [loading, setLoading] = useState(true);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    pokemon.card.where({ page: 1, pageSize: 100 }).then(cards => {
      const newCards = cards.map(card => {
        return {
          id: card.id,
          src: card.imageUrl,
          name: card.name,
          types: card.types,
        };
      });
      newCards.sort(
        (a, b) => (a.name < b.name && -1) || (a.name > b.name && 1) || 0
      );
      setLoading(false);
      setCardList(c => [...c, ...newCards]);
    });
  }, [setLoading, setCardList]);

  function onSubmitCard(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    pokemon.card
      .where({ page: 1, pageSize: 100, name: cardName })
      .then(cards => {
        const newCards = cards.map(card => {
          return {
            id: card.id,
            src: card.imageUrl,
            name: card.name,
            types: card.types,
          };
        });
        newCards.sort(
          (a, b) => (a.name < b.name && -1) || (a.name > b.name && 1) || 0
        );
        setLoading(false);
        setCardList([...newCards]);
      });
    setCardName('');
  }

  function onChangeCardName(e) {
    setCardName(e.target.value);
  }

  return (
    <>
      <Header>
        <h1>PokeCards!</h1>
        <ContainerForm data-loading={loading}>
          <form onSubmit={onSubmitCard}>
            <input
              type="text"
              value={cardName}
              onChange={onChangeCardName}
              placeholder="Buscar cards pelo nome"
            />
            <button type="submit">
              {loading ? <FaSpinner className="spinner" /> : <FaSearch />}
            </button>
          </form>
        </ContainerForm>
      </Header>
      <Section>
        <ul>
          {cardList.map(card => (
            <li key={card.id}>
              <div className="infos">
                {card.name && (
                  <div className="name">
                    <strong>Nome:</strong> {card.name}
                  </div>
                )}
                {card.types && (
                  <div className="type">
                    <strong>Tipo(s):</strong>{' '}
                    {card.types.map((item, i) => {
                      return i <= 0 ? item : ` • ${item}`;
                    })}
                  </div>
                )}
                {card.id && (
                  <div className="id">
                    <strong>ID:</strong> {card.id}
                  </div>
                )}
              </div>
              <div className="imgContainer">
                <Link to={`/cards/${card.id}`}>
                  <img src={card.src} alt={card.name} />
                </Link>
              </div>
              <Link to={`/cards/${card.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export default Home;
