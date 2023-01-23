import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from '../redux/slices/heroSlice';

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

  return (
    <div>
      <pre>{JSON.stringify(heroes, null , 2)}</pre>
    </div>
  );
}

export default HeroesPage;
