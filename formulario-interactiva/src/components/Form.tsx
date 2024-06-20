import React, { useState } from 'react';
import '../App.css'
const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [lastKey, setLastKey] = useState('');
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        alert(inputValue);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        setLastKey(event.key);
    };

    const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
        setDragPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                onKeyPress={handleKeyPress} 
            />
            <button onClick={handleButtonClick}>Presioname</button>
            <div 
                draggable 
                onDrag={handleDrag} 
                style={{ width: '100px', height: '100px', backgroundColor: 'RED' }}
            >
                Arrastrame
            </div>
            <p>letra precionada: {lastKey}</p>
            <p>Arrastre posicion - X: {dragPosition.x}, Y: {dragPosition.y}</p>
        </div>
    );
};

export default Form;
