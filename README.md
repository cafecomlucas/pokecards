## PokeCards!

Aplicação Front-End que lista e detalha cards Pokemons após consumir a API . Feita com ReactJS, Styled Components.

## Como iniciar

### Versão online

Acesse o endereço [https://lucas-pokecards.netlify.com/](lucas-pokecards.netlify.com/)

### Localmente

Clone o repositório, acesse o diretório, instale a aplicação:

```bash
git clone https://github.com/cafecomlucas/pokecards.git
cd pokecards
yarn
yarn start
```

## Funcionalidades

### Página principal (Rota /)

Lista cards com:

- Nome;
- Id;
- Tipo(s);
- Imagem.

### Página do Card (Rota /cards/:id)

Mostra os detalhes da carta:

- Imagem em alta definição;
- ID;
- Nome;
- Tipo(s);
- Resistencia(s);
- Fraqueza(s);
- Lista de ataques com: Custo de “mana”, Nome, Dano e Descrição.
