import React from "react"
import { Button, Card, Form } from "react-bootstrap"

const Presentation = (props) => {
  const { handleChange, handleSubmit } = props
  return (
    <div className="container small center align">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id="email" placeholder="Enter email"  onChange={handleChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
           

          
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password" placeholder="Password" onChange={handleChange} />
            

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
