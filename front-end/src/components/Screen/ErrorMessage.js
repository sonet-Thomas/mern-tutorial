import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage=({varien="info",children})=> {
  return (
    <Alert variant={varien}>
        <strong>{children}</strong>
    </Alert>
  )
}

export default ErrorMessage