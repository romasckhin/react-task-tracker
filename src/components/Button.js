import React from 'react';

const Button = () => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <div>
            <button onClick={onClick} className='btn'>Add</button>
        </div>
    );
};

export default Button;