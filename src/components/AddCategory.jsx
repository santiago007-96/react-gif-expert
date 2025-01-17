import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // trim elimina espacios adelante y atras
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ ...categories, inputValue ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
        
    );
};