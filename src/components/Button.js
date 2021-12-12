import React from 'react';

const Button = ({onAdd,showAdd}) => {


    return (
        <div>
            <button
                style={{background: showAdd?'red':'green'}}
                onClick={onAdd}
                className='btn'>
                {showAdd?'Close':'Add'}
            </button>
        </div>
    );
};

export default Button;