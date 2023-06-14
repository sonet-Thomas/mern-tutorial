import React, { useEffect, useState } from 'react'
import MainScreen from '../MainScreen'
import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../MainScreen.css'
import axios from 'axios';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userAction';


function LoginScreen() {
  const navigate=useNavigate();
  // const [userInfo,setUserinf]=useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // state

  const dispatch=useDispatch();
  const userLogin=useSelector((state)=>state.userLogin)
  const {loading,error,userInfo}=userLogin


  const onLogin=()=>{
      if(userInfo){
      navigate("/notes");
    }
  }
  useEffect(()=>{
    
    if(userInfo){
      navigate("/notes");
    } 
  },[userInfo])
  const onFormHandler = async (e) => {
    e.preventDefault();
    // console.log("sonetttttt", email, password)
    // try {
    //   const config = {
    //     header: {
    //       "Content-type": "application/json"
    //     }
    //   }
    //   setLoading(true);
    //   const { data } = await axios.post("/api/users/login", { email, password }, config)


    //   console.log(data, "dataaaaaaaaaaaaaaaaaaa");
    //   if(data === "Invalid email or password")
    //       throw new Error(data);
    //   localStorage.setItem('userInfo', JSON.stringify(data));
    //   setLoading(false)
    // }

    // catch (error) {
    //   setLoading(false)
    //   setError(error.message)
    //   console.log(error, "error")
    // }

    dispatch(login(email,password))
  }
  return (
    <MainScreen title="Login">
      {loading && <Loading />}
      {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
      <Form onSubmit={onFormHandler}>
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
        <Button variant="primary" type="submit" onClick={onLogin}>
          Submit
        </Button>
      </Form>
      <Row>
        <Col>
          New Customer? <Link to="/register">Register Here</Link>
        </Col>
      </Row>
    </MainScreen>
  )
}

export default LoginScreen