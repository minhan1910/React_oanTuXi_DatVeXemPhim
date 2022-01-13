import React, {memo} from 'react';

function ChildUseCallBack(props) {

    let title  = 'cyberlearn';
    let object = {id: 1, name: 'An'};

    console.log('title', title);
    console.log('object', object);
    console.log('>>>>>>> re-render');
    return (
        <div>
            <small>{props.renderNotify()}</small>
            <textarea></textarea>
            <br/> <br/>
            <button className="btn btn-success">Gửi</button>
        </div>
    )
}

export default memo(ChildUseCallBack);
