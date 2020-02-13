import React, { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk';
import { Header, BackLink, Section } from './styles';

function Cards({ match }) {
  const [cardDetails, setCardDetais] = useState();

  useEffect(() => {
    const { id } = match.params;
    pokemon.card.find(id).then(({ card }) => {
      setCardDetais(card);
    });
  }, [setCardDetais, match]);

  return (
    <>
      <Header>
        <h1>PokeCards!</h1>
      </Header>

      <BackLink to="/">Voltar</BackLink>

      <Section>
        {cardDetails && (
          <>
            <div className="sideContainer card-image">
              {cardDetails.imageUrlHiRes && (
                <img src={cardDetails.imageUrlHiRes} alt={cardDetails.name} />
              )}
            </div>

            <div className="sideContainer props">
              <div className="propContainer">
                <h2>ID</h2>
                <p>{cardDetails.id}</p>
              </div>

              <div className="propContainer">
                <h2>Nome</h2>
                <p>{cardDetails.name}</p>
              </div>

              {cardDetails.types && (
                <div className="propContainer">
                  <>
                    <h2>Tipo(s):</h2>
                    <p>
                      {cardDetails.types.map((type, i) => {
                        return i <= 0 ? `${type}` : ` • ${type}`;
                      })}
                    </p>
                  </>
                </div>
              )}

              {cardDetails.resistances && (
                <div className="propContainer">
                  <h2>Resistências(s):</h2>
                  <p>
                    {cardDetails.resistances.map((resistance, i) => {
                      return i <= 0
                        ? `${resistance.type} (${resistance.value})`
                        : ` • ${resistance.type} (${resistance.value})`;
                    })}
                  </p>
                </div>
              )}

              {cardDetails.weaknesses && (
                <div className="propContainer">
                  <h2>Fraqueza(s):</h2>
                  <p>
                    {cardDetails.weaknesses.map((weakness, i) => {
                      return i <= 0
                        ? `${weakness.type} (${weakness.value})`
                        : ` • ${weakness.type} (${weakness.value})`;
                    })}
                  </p>
                </div>
              )}

              {cardDetails.attacks && (
                <div className="propContainer">
                  <h2>Lista de ataques</h2>
                  <ul>
                    {cardDetails.attacks.map(attack => (
                      <li key={attack.name}>
                        <h3>
                          {attack.name} | {attack.damage}
                        </h3>
                        <p>{attack.text}</p>
                        {attack.cost && (
                          <p>
                            <strong>Custo: </strong>
                            {attack.cost.map((item, i) => {
                              return i <= 0 ? item : ` • ${item}`;
                            })}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </Section>
    </>
  );
  /**
Páginas de detalhes da carta de Pokemon
Imagem em alta definição
Nome
ID do Pokemon
Tipo(s)
Lista de ataques com:
  Custo de “mana”
  Nome
  Dano
  Descrição
Resistencia(s)
Fraqueza(s)
* */
}

export default Cards;
