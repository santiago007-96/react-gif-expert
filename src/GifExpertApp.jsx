import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Puch' ]);

    const onAddCategory = (newCategory) => {
        
        if ( categories.includes(newCategory) ) return;

        setCategories( [ ...categories, newCategory ] );
        // setCategories( cat => [ ...categories, 'Malcom'] );
    };

    return (
        <>
            
            <h1>GifExpertApp</h1>

          
            <AddCategory 
                //setCategories={ setCategories} 
                onNewCategory={ event => onAddCategory(event) }
            />
            
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ) )
            }
            
        </>
    );
};
