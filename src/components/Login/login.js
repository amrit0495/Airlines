import React,{useState} from "react";
import { Form, Icon, Input, Button, message } from 'antd';
import axios from 'axios';



const LoginForm=()=>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [islogged, setIsLogged]=useState(false);
    const handleInputChange = event => {
        const value = event.target.value;
        if(event.target.name==="userName"){
            setName(value);
        }else{
            setPassword(value);
        }
      };

      const authenticateUser = async userLogged => {
        return await axios
          .get(`${process.env.REACT_APP_API_URL}/users`, {
            params: {
              uname: userLogged.userName,
              password: userLogged.password,
            },
          })
          .then(res => res);
      };
    const handleSubmit  = e => {
        e.preventDefault();
        const userLogged = {
          userName: name,
          password: password,
        };
    
        let promises = authenticateUser(userLogged);
        promises.then(res => {
          if (res.data.length === 1) {
            localStorage.setItem('role', res.data[0].role);
            setIsLogged(true);
            console.log(true);
          } else {
            message.error('Credentials Mis-match');
          }
        });
      };  
    return (
      <>
      <Form className="login-form">
          <h1>Login Form</h1>
          <Form.Item>
            <label>
              Enter Username
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="userName"
                placeholder="Username"
                value={name}
                onChange={handleInputChange}
              />
            </label>
          </Form.Item>
          <Form.Item>
            <label>
              Enter Password
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
            </label>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </>
      );
}

export default LoginForm;