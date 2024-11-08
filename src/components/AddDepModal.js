import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';



export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);


    }
    handleSubmit(event){
      event.preventDefault();
      fetch('https://localhost:44300/api/Tours',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          TourID:null,
          TourName: event.target.TourName.value
        })
      })
      .then(res=> res.json())
      .then((result)=>
      {
          alert(result);
          //this.setState({snackbaropen:true, snackbarmsg:result});
      },
      (error)=>{
        alert('Failed')
        //this.setState({snackbaropen:true, snackbarmsg:'failed'});
      } )

      
  }
    

    render(){
        return(
          <div className='container'>
            
                <Modal 
              
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Tours
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Row>
              <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="TourName">
              <Form.Label>TourName</Form.Label>
              <Form.Control
                type="text"
                name="TourName"
                required
                placeholder="TourName"
               />
              </Form.Group>

              <Form.Group>
                <br/>
                  <Button variant="primary" type="submit">
                      Add Tour
                  </Button>
              </Form.Group>
              </Form>
              </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>

      </Modal>

      </div>  
        )
    }
}     