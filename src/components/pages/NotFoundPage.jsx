import React from 'react'
import { Row, Col } from 'react-bootstrap'

const NotFoundPage = () => {
  return (
    <>
      <Row>
        <Col className="mb-4">
          <h1 className="mt-5">Sorry this page cannot be found</h1>
          <p className="lead">Please go page a page and try again.</p>
        </Col>
      </Row>
    </>
  )
}

export default NotFoundPage