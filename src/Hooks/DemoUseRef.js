import React, {useState, useRef} from 'react';

export default function DemoUseRef() {
    let inputUserName = useRef(null);
    let inputPassword = useRef(null);
    
    //để đây là nó tự gán lại sau mỗi lần set   
    //=> dùng useRef thì nó sẽ lưu trữ lại
    let userName = useRef('');

    const [userLogin, setUserLogin] = useState({userName: ''});

    const handleLogin = () => {
        // console.log('componentInputUserName: ', inputUserName.current, ' componentInputPassword: ', inputPassword.current);
        // console.log('componentInputUserName: ', inputUserName.current.name, ' componentInputPassword: ', inputPassword.current.name);
        // console.log('componentInputUserName: ', inputUserName.current.className, ' componentInputPassword: ', inputPassword.current.className);
        // console.log('componentInputUserName: ', inputUserName.current.value, ' componentInputPassword: ', inputPassword.current.value);
        console.log(userName);
        console.log(userLogin.userName);
        userName.current = 'abc';
        setUserLogin({
            useName: userName
        });
    }

    return (
        <div className="container">
            <div className="form-group">
                <h3>User Name</h3>
                <input ref={inputUserName} type="text" name="userName" className="form-control"/>    
            </div>            
            <div className="form-group">
                <h3>Password</h3>
                <input ref={inputPassword} type="text" name="password" className="form-control"/>     
            </div>            
            <div className="form-group">
                <button type="submit" className="btn btn-success" onClick={() => handleLogin()}>Login</button>
            </div>            
        </div>
    )
}
