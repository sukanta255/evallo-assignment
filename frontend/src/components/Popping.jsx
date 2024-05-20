import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../style/model.scss"
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import { deleteEventApi, ShowEventsApi, closeEvent } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const Popping = ({open, handleClose, event, deleteEventApi, renderStatus, rerender})=> {
   const navigate = useNavigate();
  const {id, describe,participants,sessionNotes,duration, title, date,time} = event;
  console.log("title-----------------",title)
   const handleDelete =async () => {
     await deleteEventApi(event.id);
     rerender(!renderStatus)
   }

   

   const modal = ()=>{
     return (
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className="text-capitalize">Title: {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {describe? <p className="lead text-center">Description: {describe}</p>: "No Dsecriptions Yet"}
            <div className="row justify-content-between">
              <p className="col small text-muted text-center pb-0 mb-0">Date: {date}</p>
              {/* <p className="col small text-muted text-center pb-0 mb-0">Time: {time}</p> */}
            </div>
            <div>
              <p className="col small text-muted text-center pb-0 mb-0">Session Notes: {sessionNotes}</p>
            </div>
            <div>
              <p className="col small text-muted text-center pb-0 mb-0">Duration: {duration} hours</p>
            </div>
            <div>
              <p className="col small text-muted text-center pb-0 mb-0">List Of Participants: {participants}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
     
            <Link to={"/events/add"}><Button variant="success">Add Event</Button></Link>
            {/* <Link className="nav-link pe-0 " to={"/events/add"}>Add Event</Link> */}
            <Button variant="warning" onClick={handleClose}>Close</Button>
            {/* <Link to={`/event/${id}/update`}><Button variant="success">Update</Button></Link> */}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
     )
   }

   if(id){
     return modal()
   }else{
     <p>there is no modal to preview</p>
   }
   
  }

  function mapStateToProps({event}){
     return {
       event,
     }
  }
  
  export default connect(mapStateToProps, {deleteEventApi, closeEvent})(Popping)