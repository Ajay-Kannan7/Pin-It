import {useParams} from "react-router-dom"
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Bars } from  'react-loader-spinner'
import "./PinDetails.css"
import "animate.css/animate.css"

function PinDetailsPage(){
    let {pin} = useParams();
    let state = useSelector(state=>{return {...state}})
    let actualData,storedComponent

    //data fetching;
    if(state.pinData===undefined){
        return
    }else{
        actualData = state.pinData
        console.log(actualData)
    }

    if(actualData["post code"]===pin){
        storedComponent = 
        <div className="pin-details">
            <h1>Country : {actualData.country}</h1>
            <h3>Postal Code: {actualData["post code"]}</h3>
            <p>State : {actualData.places[0].state}</p>
            <p>Place Name: {actualData.places[0]["place name"]}</p>
            <Link className="link" to="/"><FontAwesomeIcon icon={faArrowLeft} /> Back to homepage</Link>
        </div>
    }

    return(
        <div className="pin-cover">
            {
                state.loader===true
                ?<Bars
                className="loader"
                height="100"
                width="100"
                color="#000"
                ariaLabel="bars-loading"
                wrapperStyle={
                    {display:"flex",justifyContent:"center"}
                }
                wrapperClass=""
                visible={true}/>
              :storedComponent
            } 
        </div>
    )
}

export default PinDetailsPage