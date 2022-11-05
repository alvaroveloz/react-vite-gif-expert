
import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import CardGroup from 'react-bootstrap/CardGroup';

export const GifGrid = ({ category }) => {
 
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className='text-muted'>{category}</h3>
      {isLoading && <h3>Loading...</h3>}
      {/* <div className='card-grid'> */}
      <CardGroup>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </CardGroup>
      {/* </div> */}
    </>
  );
};

// export default GifGrid;