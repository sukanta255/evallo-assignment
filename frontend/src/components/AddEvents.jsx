import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { addEventApi } from "../Redux/actions";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";

const schema = yup.object({
  title: yup.string().required("Can't Be Empty"),
}).required();



const AddEvents = ({addEventApi, error}) => {

     const navigate = useNavigate()
     const [rerender, setRerender] = useState(false);
     const [dbError, setError] = useState(false)
     const [firstRender, setFirstRender] = useState(true)
     
 

     useEffect( ()=>{
      if(error && !firstRender){
        setError(error)
        
      }
        if(!error.start && !error.end && dbError !== false){
          setTimeout(navigate("/")) 
        }
     }, [rerender])

    const { register, handleSubmit, formState: {errors}, control } = useForm({
      resolver: yupResolver(schema)
    });
   
     const onSubmit = async(values)=>{
      setFirstRender(false)
        addEventApi(values)
        .then(()=>{
        setRerender(!rerender)
    
        })
        
       }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" align-content-center m-5">
    <div className="mb-4">
      <label htmlFor="title" className="form-label">Event Title</label>
      <input {...register("title")}  type="text" placeholder="title" className="form-control" id="title" aria-describedby="title" />
      <p className={`error text-warning position-absolute ${errors.title?"active":""}`}>{errors.title?<i className="bi bi-info-circle me-2"></i>:""}{errors.title?.message}</p>
    </div>

    <div className="mb-4" style={{zIndex: "100"}}>
      <label htmlFor="date" className="form-label">Date</label>
      <Controller
      control={control}
      name="date"
      render={({ field }) => (
        <DatePicker
          placeholderText="Select date"
          onChange={(date) => field.onChange(date)}
          selected={field.value}
          value={field.value}
          dateFormat="MMMM d, yyyy"
          className="form-control"
          id="date"
        />
      )}
    />
    <p className={`error text-warning position-absolute ${errors.date?"active":""}`}>{errors.date?<i className=" bi bi-info-circle me-2"></i>:""}{errors.date?.message}</p>
    <p className={`error text-warning position-absolute ${dbError.date?"":"d-none"}`}>{dbError.date?<i className=" bi bi-info-circle me-2"></i>:""}{dbError.date}</p>
    </div>

    <div className="mb-4" style={{zIndex: "100"}}>
      <label htmlFor="time" className="form-label">Time</label>
      <Controller
        control={control}
        name="time"
        render={({ field }) => (
        <DatePicker
          placeholderText="Select time"
          onChange={(time) => field.onChange(time)}
          selected={field.value}
          value={field.value}
          timeFormat="HH:mm"
          dateFormat="h:mm aa"
          showTimeSelect
          showTimeSelectOnly
          className="form-control"
          id="time"
       />
    )}
  />
    <p className={`error text-warning position-absolute ${dbError.time?"":"d-none"}`}>{dbError.time?<i className=" bi bi-info-circle me-2"></i>:""}{dbError.time}</p>
    </div>
    <div className="mb-4">
      <label htmlFor="duration" className="form-label">
        Event duration 
      </label>
      <input {...register("duration")}  type="text" placeholder="duration your event" className="form-control" id="duration" aria-describedby="duration" />
    </div>
    <div className="mb-4">
      <label htmlFor="describe" className="form-label">
        Event Description 
      </label>
      <input {...register("describe")}  type="text" placeholder="describe your event" className="form-control" id="describe" aria-describedby="describe" />
    </div>
    <div className="mb-4">
      <label htmlFor="sessionNotes" className="form-label">
      Session Notes
      </label>
      <input {...register("sessionNotes")}  type="text" placeholder="session Notes your event" className="form-control" id="sessionNotes" aria-describedby="sessionNotes" />
    </div>
    <button type="submit" className="btn btn-success">Create</button>
  </form>
  )
}


function mapStateToProps({event, error}){
  return{
    error
  }
}


export default connect(mapStateToProps , {addEventApi})(AddEvents)