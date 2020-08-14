import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ErrorPage = (data: any) => {
  const errorData = data.errorData
  return (
    <>
      <Row>
        <Col className="mb-4">
          <h1 className="mt-5">Sorry we encountered an error</h1>
          <p className="lead">Please go page a page and try again.</p>
        </Col>
      </Row>
      <pre className="error">{JSON.stringify(errorData, null, 2)}</pre>
    </>
  )
}

export default ErrorPage