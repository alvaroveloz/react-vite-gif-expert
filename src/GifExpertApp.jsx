import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch',  'Goku']);

const onAddCategory = (newCategory) => {

  if (categories.includes(newCategory)) return ;
  
  setCategories([newCategory, ...categories ]);
};

  return (
    <>
      {/*  Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onAddCategory={ onAddCategory }
      />

      {/*  Gif List */}
      {/* <button onClick={onAddCategory}> Add Category</button> */}
      
        {categories.map((category) => {
          return <GifGrid key={category} category= {category}
          />
        })}
      

      {/*  Gif Item */}
    </>
  );
};

export default GifExpertApp;
