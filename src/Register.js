import React, {useState} from 'react'
import { useHistory } from 'react-router'
import Headerlogin from './Headerlogin';
import { Card, CardText } from 'reactstrap';

import "./Login.css"


function App() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8003/api/register', {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
			history.push('/login')
		}

        console.log(data)
    }


    return (
        <div >
            <Headerlogin />
            <img className="imgee" src="https://brobible.com/wp-content/uploads/2018/09/istock-861368754.jpg"/>
            <Card className="cardey" >
                <CardText className="title">Register today!</CardText>
                <button type="submit" value="Register" >or Log in</button>
                    <form onSubmit={registerUser}>
                        <input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            type="name" 
                            placeholder="name" />
                        <br />
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
                        <button type="submit" value="Register" >Register</button>
                    </form>
            </Card>
        </div>
    )
}

export default App
