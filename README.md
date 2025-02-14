## PokeCards!

Aplicação Front-End responsiva que lista e detalha cards Pokemons após consumir a API PokemonTCG. Feita com ReactJS, Styled Components e FlexBox.

![Demonstração - Busca na API](.github/reactjs-pokemontcg-api-pokecards.gif)

---

## Como iniciar

### Versão online

Acesse o endereço [lucas-pokecards.netlify.app/](https://lucas-pokecards.netlify.app/)

### Localmente

Clone o repositório, acesse o diretório, instale as dependências e inicie a aplicação:

```bash
git clone https://github.com/cafecomlucas/pokecards.git
cd pokecards
yarn
yarn start
```

---

## Funcionalidades

### Página principal (Rota /)

Lista cards com:

- Nome;
- Tipo(s);
- Id;
- Imagem.

### Página do Card (Rota /cards/:id)

Mostra os detalhes da carta com:

- Imagem em alta definição;
- ID;
- Nome;
- Tipo(s);
- Resistencia(s);
- Fraqueza(s);
- Lista de ataques com: Nome, Dano, Descrição e Custo de “mana”.
