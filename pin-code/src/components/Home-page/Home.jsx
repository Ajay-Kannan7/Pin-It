import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import "./Home.css"
import "animate.css/animate.css"

function HomePage(){
    let navigate = useNavigate()
  
  // Redux management variables
  let dispatch = useDispatch();
  let state = useSelector(state=>{return {...state}})

  //state management for fetched data
  let [inputPin,setInputPin] = useState({
    pin:""
  })

  //methods for setting the data
  function handleChange(event){
    let {name,value} = event.target
    setInputPin({
      [name]:value
    })
  }

  //fetching API data
  function handleClick(){
    axios.get(`https://api.zippopotam.us/in/${inputPin.pin}`)
    .then(res=>{
        dispatch({
            type:"LOADER",
            payload:true
        })
        dispatch({
            type:"LOADDATA",
            payload:res.data
        })
        setTimeout(function(){
            dispatch({
                type:"STOPLOADER",
                payload:false
            })
        },2000)
        navigate(`/${inputPin.pin}`)
    })
    .catch(()=>{
        if(inputPin.pin===""){ 
            alert("Empty PIN is not allowed!")
            setInputPin({
                pin:""
            })
            return
        }
        alert("PIN code doesn't exist!")
        setInputPin({
            pin:""
        })
    })
  }

    return(
        <div>
            <div className="pin-home">
                <form className="form">
                    <label>Enter the postal code:</label>
                    <input name="pin" value={inputPin.pin} onChange={handleChange} type="number" required placeholder="Enter PIN"></input>
                    <button type="button" onClick={handleClick}>Get Details!</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage