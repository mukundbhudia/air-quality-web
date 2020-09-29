import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ErrorPanel from '../panels/ErrorPanel'

const ErrorPage = (data: any) => {
  return (
    <>
      <Row>
        <Col className="mb-4">
          <h1 className="mt-5">Sorry we encountered an error</h1>
          <p className="lead">Please go back a page and try again.</p>
          <ErrorPanel error={data} />
        </Col>
      </Row>
    </>
  )
}

export default ErrorPage