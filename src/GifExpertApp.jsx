import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import Container from 'react-bootstrap/Container';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Goku']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*  Title */}
      <Container fluid>
        <h1 className='text-primary mt-3 mb-3'>Gif Expert App</h1>

        {/* Input */}
        <AddCategory onAddCategory={onAddCategory} />

        {/*  Gif List */}
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </Container>
    </>
  );
};

export default GifExpertApp;
