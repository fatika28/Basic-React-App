import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';



export class EditDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleSubmit(event){
      event.preventDefault();
      fetch('https://localhost:44300/api/Tours',{
        method:'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          TourID:event.target.TourID.value,
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
            Edit Tours
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Row>
              <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="TourID">
              <Form.Label>TourID</Form.Label>
              <Form.Control
                type="text"
                name="TourID"
                required
                disabled
                defaultValue={this.props.torID}
                placeholder="TourID"
               />
              </Form.Group>
              <Form.Group controlId="TourName">
              <Form.Label>TourName</Form.Label>
              <Form.Control
                type="text"
                name="TourName"
                required
                defaultValue={this.props.torName}
                placeholder="TourName"
               />
              </Form.Group>

              <Form.Group>
                  <Button variant="primary" type="submit">
                      Update Tour
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