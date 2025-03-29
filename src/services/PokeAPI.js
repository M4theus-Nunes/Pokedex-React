export const fetchPokemon = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Pokémon não encontrado!");
    }

    const data = await response.json(); // Retorna os dados do Pokémon
    return data;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    throw error; // Propaga o erro para ser tratado no componente
  }
};

export const fetchPokedex = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1025"
    );
    const data = await response.json();

    // Dividir os resultados em lotes de 500
    const tamLote = 500;
    const lotes = [];

    for (let i = 0; i < data.results.length; i += tamLote) {
      lotes.push(data.results.slice(i, i + tamLote));
    }

    // Fazer as requisições por lote
    const pokedex = [];
    
    // Esse laço de repetição separa os array de lotes em 1 por 1 utilizando lote
    for (const lote of lotes) {

      // Cada lote é mapeado
      const pokemons = await Promise.all(
        lote.map((item) => fetchPokemon(item.url))
      );

      pokedex.push(...pokemons); // Adiciona os resultados ao array
    }

    return pokedex;
  } catch (error) {
    console.error("Erro ao buscar Pokédex:", error);
  }
};
