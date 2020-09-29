import React from 'react'

import { Col, Card } from 'react-bootstrap'

const ErrorPanel = (data: any) => {
  const error = data.error
  return (
    <>
      <Col>
        <Card className="bg-light error-border border-danger mb-3">
          <pre className="error">{JSON.stringify(error, null, 2)}</pre>
        </Card>
      </Col>
    </>
  )
}

export default ErrorPanel