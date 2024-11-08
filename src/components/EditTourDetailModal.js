import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';



export class EditTourDetailModal extends Component{
    constructor(props){
        super(props);
        this.state={tour:[]};
        this.handleSubmit=this.handleSubmit.bind(this);

    }

componentDidMount(){
    fetch('https://localhost:44300/api/Tours')
    .then(response => response.json())
    .then(data =>{
        this.setState({tour:data});
    });
} 


    handleSubmit(event){
      event.preventDefault();
      fetch('https://localhost:44300/api/TourDetails',{
        method:'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          CustomerID:event.target.CustomerID.value,
          CustomerName: event.target.CustomerName.value,
          Tours: event.target.TourName.value,
         // Email: event.target.Email.value,
          //DateOfTour: event.target.DateOfTour.value
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
            Edit Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Row>
              <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="CustomerID">
              <Form.Label>CustomerID</Form.Label>
              <Form.Control
                type="text"
                name="CustomerID"
                disabled
                defaultValue={this.props.tdetID}
                placeholder="CustomerID"
               />
              </Form.Group>
              <Form.Group controlId="CustomerName">
              <Form.Label>CustomerName</Form.Label>
              <Form.Control
                type="text"
                name="CustomerName"
                required
                defaultValue={this.props.tdetName}
                placeholder="Enter Customer Name"
               />
              </Form.Group>

              <Form.Group controlId="TourName">
              <Form.Label>TourName</Form.Label>
              <Form.Control as="select" defaultValue={this.props.tours}>
                {this.state.tour.map(tor => 
                    <option key={tor.TourID}>{tor.TourName}</option>
                    )}

              </Form.Control>
                
               
              </Form.Group>

              <Form.Group controlId="Mail">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="text"
                name="Mail"
                //required
                defaultValue={this.props.email}
                placeholder="Enter Mail"
               />
              </Form.Group>
              <Form.Group controlId="DateOfTour">
              <Form.Label>Date Of Tour</Form.Label>
              <Form.Control
                type="text"
                name="DateOfTour"
               //required
               defaultValue={this.props.dot}
                placeholder="Enter Date"
               />
              </Form.Group>




              <Form.Group>
                  <Button variant="primary" type="submit">
                      Update Customer
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