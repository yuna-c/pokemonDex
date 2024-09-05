import React, { useEffect, useState } from 'react';

export default function PokemonList() {
  const TOTAL_POKEMON = 151;
  const PAGE_SIZE = 20;

  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      setError(null);

      const offset = (page - 1) * PAGE_SIZE;

      try {
        // 포켓몬 기본 정보 및 속성, 한글 이름 가져오기
        const promises = Array.from({ length: PAGE_SIZE }, async (_, index) => {
          const id = index + 1 + offset;
          if (id > TOTAL_POKEMON) return null;

          // 포켓몬 기본 정보 가져오기
          const pokemonResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const pokemon = await pokemonResponse.json();

          // 포켓몬 종 정보 가져오기 (한글 이름 포함)
          const speciesResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`
          );
          const species = await speciesResponse.json();

          // 한글 이름 찾기
          const koreanName = species.names.find(
            (name) => name.language.name === 'ko'
          );

          // 속성(타입) 가져오기
          const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

          // 이미지 가져오기
          const image = pokemon.sprites.other['official-artwork'].front_default;

          // 필요한 데이터만 추출하여 반환
          return {
            id: pokemon.id,
            name: koreanName ? koreanName.name : pokemon.name,
            types,
            image
          };
        }).filter(Boolean);

        const results = await Promise.all(promises);
        setPokemonData(results);
      } catch (error) {
        setError('데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(TOTAL_POKEMON / PAGE_SIZE))
    );
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>포켓몬 목록</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pokemonData.map((pokemon) => (
          <li
            key={pokemon.id}
            style={{ marginBottom: '20px', textAlign: 'center' }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ width: '300px', height: '300px' }}
            />
            <h2>{pokemon.name}</h2>
            <p>속성: {pokemon.types.join(', ')}</p>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          이전
        </button>
        <button
          onClick={handleNextPage}
          disabled={page >= Math.ceil(TOTAL_POKEMON / PAGE_SIZE)}
        >
          다음
        </button>
      </div>
    </div>
  );
}
