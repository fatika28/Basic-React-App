import React, {Component} from "react";
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddTourDetailModal } from "./AddTourDetailModal";
import { EditTourDetailModal } from "./EditTourDetailModal";



export class TourDetail extends Component
{

constructor(props){
  super(props);
  this.state={tdetail:[] , addModalShow:false , editModalShow:false}
}




refreshList(){
  fetch('https://localhost:44300/api/TourDetails')
  .then(response=> response.json())
  .then(data => {
    this.setState({tdetail:data});
  })
}

componentDidMount(){
  this.refreshList();
}
 componentDidUpdate(){
  this.refreshList();
 }

 deletetdet(tdetID){
if(window.confirm('Are You Sure ?')){
  fetch('https://localhost:44300/api/TourDetails/'+tdetID,{
    method:'DELETE',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'}
})
 }
}

  render() {
const {tdetail ,tdetID ,tdetName,tours,email,dot}=this.state;
let addModalClose =() => this.setState({addModalShow:false});
let editModalClose =() => this.setState({editModalShow:false});

    return(
      <div> 
      <Table className="mt-4" striped bordered hover size="sm">
      <thead>
          <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Tour Name</th>
              <th>Email</th>
              <th>Date Of Tour</th>
              <th>Option</th>
          </tr>
      </thead>
      <tbody>
          {tdetail.map(tdet=>
             <tr key ={tdet.CustomerID}> 
             <td>{tdet.CustomerID}</td>
             <td>{tdet.CustomerName}</td>
             <td>{tdet.TourName}</td>
             <td>{tdet.Email}</td>
             <td>{tdet.DateOfTour}</td>
             <td>

<ButtonToolbar>
  <Button className="mr-2" variant="info"
  onClick={()=>this.setState({editModalShow:true,
  tdetID:tdet.CustomerID,tdetName:tdet.CustomerName,
  tours:tdet.TourName,email:tdet.Email,dot:tdet.DateOfTour})}>

    Edit
</Button>

<Button className="mr-2" variant="danger"
  onClick={()=> this.deletetdet(tdet.CustomerID)}>
    
    Delete
</Button>

<EditTourDetailModal show={this.state.editModalShow}
onHide={editModalClose} 
tdetID={tdetID}
tdetName={tdetName}
tours={tours}
email={email}
dot={dot}
/>
</ButtonToolbar>

             </td>
             </tr>
          )}
          </tbody>
          </Table>

          <ButtonToolbar>
      <Button variant="primary" 
      onClick={() => this.setState({addModalShow:true})}>
          Add Customer
      </Button>

      <AddTourDetailModal
        show={this.state.addModalShow}
        onHide={addModalClose}
      />
    </ButtonToolbar>
          </div>
    )
  }
}
