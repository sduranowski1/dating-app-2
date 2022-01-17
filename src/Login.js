import React, {useState} from 'react'
import { useHistory } from 'react-router'
import Headerlogin from './Headerlogin';
import { Card, CardText } from 'reactstrap';

import "./Login.css"


function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8003/api/login', {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
    }


    return (
        <div >
            <Headerlogin />
            <img className="imgee" src="https://brobible.com/wp-content/uploads/2018/09/istock-861368754.jpg"/>
            <Card className="cardey" >
                <CardText className="title">Login!</CardText>
                    <form onSubmit={loginUser}>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder="email" />
                        <br />
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            placeholder="password" />
                        <br />
                        <button type="submit" value="Login" >Login</button>
                    </form>
            </Card>
        </div>
    )
}

export default App