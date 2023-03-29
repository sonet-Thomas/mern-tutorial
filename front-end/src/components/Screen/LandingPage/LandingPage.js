import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
            <div className='intro-text'>
                <div>
                <h1 className='title'>Welcome to node Zipper</h1>
                <p className='subtitleS'>one safe place for all your Notes</p>
                </div>
                <div className='button-container'>
                <a href='/login'>
                    <Button size='lg' className='landingbutton'>Login</Button>
                </a>
                <a href='/register'>
                    <Button size='lg' className="landingbutton" variant="outline-primary">Signup</Button>
                </a>
            </div>
            </div>
            
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
