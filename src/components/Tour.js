import React, {Component} from "react";
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddDepModal } from "./AddDepModal";
import { EditDepModal } from "./EditDepModal";



export class Tour extends Component
{

constructor(props){
  super(props);
  this.state={tour:[] , addModalShow:false , editModalShow:false}
}




refreshList(){
  fetch('https://localhost:44300/api/Tours')
  .then(response=> response.json())
  .then(data => {
    this.setState({tour:data});
  })
}

componentDidMount(){
  this.refreshList();
}
 componentDidUpdate(){
  this.refreshList();
 }

 deletetor(torID){
if(window.confirm('Are You Sure ?')){
  fetch('https://localhost:44300/api/Tours/'+torID,{
    method:'DELETE',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'}
})
 }
}

  render() {
const {tour ,torID ,torName}=this.state;
let addModalClose =() => this.setState({addModalShow:false});
let editModalClose =() => this.setState({editModalShow:false});

    return(
      <div> 
      <Table className="mt-4" striped bordered hover size="sm">
      <thead>
          <tr>
              <th>Tour ID</th>
              <th>Tour Name</th>
              <th>Option</th>
          </tr>
      </thead>
      <tbody>
          {tour.map(tor=>
             <tr key ={tor.TourID}> 
             <td>{tor.TourID}</td>
             <td>{tor.TourName}</td>
             <td>

<ButtonToolbar>
  <Button className="mr-2" variant="info"
  onClick={()=>this.setState({editModalShow:true,torID:tor.TourID,torName:tor.TourName})}>

    Edit
</Button>

<Button className="mr-2" variant="danger"
  onClick={()=> this.deletetor(tor.TourID)}>
    
    Delete
</Button>

<EditDepModal show={this.state.editModalShow}
onHide={editModalClose} 
torID={torID}
torName={torName}/>
</ButtonToolbar>

             </td>
             </tr>
          )}
          </tbody>
          </Table>

          <ButtonToolbar>
      <Button variant="primary" 
      onClick={() => this.setState({addModalShow:true})}>
          Add Tour
      </Button>

      <AddDepModal
        show={this.state.addModalShow}
        onHide={addModalClose}
      />
    </ButtonToolbar>
          </div>
    )
  }
}
