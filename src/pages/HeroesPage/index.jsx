import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/Hero';
import { getHeroes } from '../../redux/slices/heroSlice';

function HeroesPage() {
  const { heroes, isLoading, error } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, []);

  if (isLoading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  const heroesCards = heroes.map(hero => <Hero hero={hero} />)

  return (
    <div>
      <pre>{heroesCards}</pre>
    </div>
  );
}

export default HeroesPage;
