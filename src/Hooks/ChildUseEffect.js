import React, { useState, useEffect} from 'react';

function ChildUseEffect() {
    
    const [number, setNumber] = useState(0);

    console.log('render ChildUseEffect');
    
    useEffect(() => {
        console.log('didUpdate');
      }, [number]); 

    useEffect(() => {
        //Viết cho didUpdate
        return () => {
            console.log('willUnmount');    
        }
    }, [])

    return (
        <div>
            <textarea></textarea> <br/> <br/>
            <button class="btn btn-success">Gửi</button>
        </div>
    )
}

export default ChildUseEffect
