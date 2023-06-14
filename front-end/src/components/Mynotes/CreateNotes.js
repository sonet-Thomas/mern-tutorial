import React, { useState } from 'react'
import MainScreen from '../MainScreen'
import { Card,Form } from 'react-bootstrap'
import { error } from 'console'
import ErrorMessage from '../Screen/ErrorMessage'


function CreateNotes() {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [category,SetCategory]=useState('');
  const submitHandler=()=>{
    
  }
  return (<>
    <MainScreen title="Create a NOtes">
      <Card>
        <Card.Header>Create a new Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
          {error && <ErrorMessage varient='danger'>{error}</ErrorMessage>}
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control>
              type="text"
              value={title}
              placeholder="Enter the title"
              onChange={(e)=>setTitle(e.target.value)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='content'>
            <Form.Label>Title</Form.Label>
            <Form.Control>
              type="text"
              value={content}
              placeholder="Enter the title"
              onChange={(e)=>setContent(e.target.value)}
            </Form.Control>
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
            <Form.Control>
              type="text"
              value={category}
              placeholder="Enter the title"
              onChange={(e)=>SetCategory(e.target.value)}
            </Form.Control>
          </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
    </>
  )
}

export default CreateNotes