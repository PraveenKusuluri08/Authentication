import React from "react"
import { Button, Card, Form } from "react-bootstrap"

const Presentation = (props) => {
  const { handleChange, handleSubmit } = props
  return (
    <div className="container large">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id="email"  onChange={handleChange}/>
            <br/>
            <br/>
            <br/>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password"  onChange={handleChange} />
            

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Presentation
