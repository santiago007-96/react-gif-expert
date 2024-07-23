
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs( category );
  

  // El useEffect devuelve una funcion y el async devuelve una promesa
  // useEffect( () => {
  //   getGifs(category)
  //     .then( newImages => setImages(newImages));

  // }, []); // Arreglo vacio para redibujar solo el componente actual
  
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GifItem 
                key={ image.id }
                { ...image }
              />
            ))
          }
        </div>
    </>
  );
};
