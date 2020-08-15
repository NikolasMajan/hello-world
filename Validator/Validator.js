import React from 'react';

const validator = (props) => {
    
    if(props.length <= 4){
        return (
            <div>
                <p color = 'red'>Text is too short</p>
            </div>
        )
    }else if(props.length >= 9){
        return (
            <div>
                <p color = 'red'>Text is too long</p>
            </div>
        )
    }else{
        return (
            <div>
                <p>{props.length}</p>
            </div>
        )
    }
    
    

};
export default validator