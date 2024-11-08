import React, { Component} from "react";
import { Button, Form} from 'react-bootstrap';
//import {withRouter} from 'react-router-dom';

export class Home extends Component {

  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);

}
handleSubmit(event){
  event.preventDefault();
  fetch('https://localhost:44300/api/SignUp',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      UserID:null,
      UserName: event.target.UserName.value,
      //UserEmail:event.target.UserEmail.value,
      //UserPassword:event.target.UserPassword.value
    })
  })
  .then(res=> res.json())
  .then((result)=>
  {
      alert(result);
 
  },
  (error)=>{
    alert('Failed')
   
  } )
 

}
 
routeChange() {
  let path = "./Tour";
  this.props.history.push(path);
}



  render() {
    return(
    <div className="col-sm-4 offset-sm-3">
      <br/>
      <br/>
      <br/>
      <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="UserName">
              <Form.Label><h1>Sign In</h1></Form.Label>
              <Form.Control
                type="text"
                name="UserName"
                required
                placeholder="enter name"
               />
              </Form.Group>
              <br/>
              <Form.Group controlId="Email">
              <Form.Control
                type="text"
                name="Email"
               // required
                placeholder="enter email"
               />
              </Form.Group>
              <br/>
              <Form.Group controlId="Password">
              <Form.Control
                type="password"
                name="Password"
                //required
                placeholder="enter password"
               />
              </Form.Group>

              <Form.Group>
                <br/>
                  <Button variant="primary" type="submit"
                  onClick={this.routeChange}
                  >
                      Sign In
                  </Button>
              </Form.Group>
              </Form>
    </div>
    )
  }
}