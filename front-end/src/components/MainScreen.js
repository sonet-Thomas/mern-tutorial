import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './MainScreen.css'

const MainScreen = ({title,children}) => {
  return (
    <div>
        <Container>
            <Row>
                <div className='page'>
                    {title && (
                        <h1>
                            {title}
                        </h1>
                    )}
                    {children}
                </div>
            </Row>
        </Container>
      
    </div>
  )
}

export default MainScreen
