import React, { useState } from 'react'
import MainScreen from '../MainScreen'
import { Card,Form ,Button} from 'react-bootstrap'
import ErrorMessage from '../Screen/ErrorMessage'
import {useDispatch,useSelector} from "react-redux"
import {createNotesData } from "../../actions/notesAction"
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function CreateNotes() {
  const dispatch=useDispatch()
  
  
  const noteCreate=useSelector((state)=>state.noteCreate)

  const {loading,error,note}=noteCreate
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [category,SetCategory]=useState('');

 
  const submitHandler=(e)=>{
     e.preventDefault();
dispatch(createNotesData(title,content,category))
// if(note){
 window.location="/myNotes";
// }
  }

  const resetHandler=()=>{
setTitle('');
setContent('');
SetCategory('');

  }


  return (
    <MainScreen title="Create a NOtes">
      <Card>
        <Card.Header>Create a new Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
          {error && (<ErrorMessage varien="danger">{error}</ErrorMessage>)}
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter the title"
              onChange={(e)=>setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='content'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={content}
              placeholder="Enter the title"
              onChange={(e)=>setContent(e.target.value)}
          />
          </Form.Group>
          {content && (
            <Card>
              <Card.Header>Note Preview</Card.Header>
              <Card.Body>
                {content}
                </Card.Body>
            </Card>
          )}
            <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              placeholder="Enter the title"
              onChange={(e)=>SetCategory(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Create Note</Button>
          <Button variant="danger" onClick={()=>resetHandler()}>Reset Fields</Button>
          </Form>
        </Card.Body>
        <Card.Footer>{new Date().toLocaleDateString()}</Card.Footer>
      </Card>
    </MainScreen>
    
  )
}

export default CreateNotes