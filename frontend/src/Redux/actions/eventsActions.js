
import { event } from "../Axios/event"
import * as moment from "moment"
import { addError, removeError } from "./errorsAction"
import { useNavigate } from "react-router-dom"
export const showEvent = (event)=>{
    console.log("event to be shown on the modal: ", event)
    return{
        type: "SHOW_EVENT",
        payload: event
    }
}

export const showEvents = (events)=>{
    
    return{
        type: "SHOW_EVENTS",
        payload: events
    }
}

export const ShowEventApi = id => async dispatch => {
     
    const result = await event.get(`/${id}/show`);

    try{
            const {title, _id, date,time, duration,participants, describe,sessionNotes} = await result.data;
            const convertedEvent = {
                title,
                duration,
                participants,
                describe,
                sessionNotes,
                id: _id,
                date: moment(date).format("ddd DD MMM YY LT"),
                time
            }
        await dispatch(showEvent(convertedEvent))
    }catch(err){
         const error =await err.data.message;
         return error
    }
}

export const ShowEventsApi = () => async dispatch => {
     console.log("started fetching the api")
    const result = await event.get("/");

    try{
        const convertedDates = await result.data.map(event=>{
            return{
                title: event.title,
                date: new Date(event.date) ,
                time: event.time,
                id: event._id,
                duration: event.duration,
                participants: event.participants,
                describe: event.describe,
                sessionNotes: event.sessionNotes
              }
          })
        await dispatch(showEvents(convertedDates))
    }catch(err){
         const error =await err.data.message;
         return error
    }
}


export const deleteEvent = (id)=>{
   return {
       type: "DELETE_EVENT",
       payload: id
   }
}

export const deleteEventApi = (id) =>  async dispatch=> {
    const result = await event.delete(`/${id}/delete`)

    try {
        const deleted = await result.data;
        await dispatch(deleteEvent(id))
        return {deleted}
    }catch(err){
        const message = await result.data.message;
        console.log(message)
        return {message}
    }
}



const addEvent = (newEvent)=>{
    return{
      type: "ADD_EVENT",
      payload: newEvent
    }
}


export const addEventApi = (values) => async dispatch =>{
    const result = await event.post("/", {
         title: values.title,
         date: values.date,
         time: values.time,
         duration: values.duration,
         participants: values.participants,
         describe: values.describe,
         sessionNotes: values.sessionNotes
       })
       .then(res=>{
        
        if(res && res.data){
            console.log("event from the api going to the reducer: ", res.data)
            dispatch(addEvent(res.data)) 
            dispatch(removeError())
            
            return  "success";
        }
       })
       .catch(res=>{
        console.log("catch response, ", res)
        if(res.response.data){
            
            console.log(res.response.data)
            dispatch(addError(res.response.data));
        }
    })
       
}


const updateEvent = (updatedEvent)=>{
    return{
      type: "UPDATE_EVENT",
      payload: updatedEvent
    }
}


export const updateEventApi = (values, id) => async dispatch =>{
    try{
        const result = await event.put(`/${id}/update`, {
            title: values.title,
            date: values.date,
            time: values.time,
            duration: values.duration,
            describe: values.describe,
            sessionNotes: values.sessionNotes
          })
         console.log(result)
          const response = result.data;
          dispatch(removeError())
          return "response was successful";
    }catch(err){
        console.log(err)
        dispatch(addError(err.response.data));
    }
 
}