import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import axios from 'axios';

function RegisterScreen() {
  const [email,setEamil]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCpassword]=useState("");
  const [image,setImage]=useState("");
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const [loading, setLoading] = useState(false);

 const onFormHandler= async(event)=>{
  event.preventDefault()

  if(password!==cpassword){
    setMessage("enter same passwords");
  }
  else{
    try {
      const config = {
        header: {
          "Content-type": "application/json"
        }
      }
      setLoading(true);
      const { data } = await axios.post("/api/users", { name, email,password,image }, config)


      console.log(data, "dataaaaaaaaaaaaaaaaaaa");
      if(data === "Invalid email or password")
          throw new Error(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false)
    }

    catch (error) {
      setLoading(false)
      setMessage(error.message)
      console.log(error, "error")
    }
  }
  
  console.log(email,password,image,name,cpassword);
 }


  return (
    <div>
      {loading && <Loading />}
      {message && <ErrorMessage varient="danger">{message}</ErrorMessage>}
      <Form onSubmit={onFormHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={(e) => setEamil(e.target.value)}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic-confirm-password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicimage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default RegisterScreen