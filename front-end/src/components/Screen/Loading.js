import { Spinner } from "react-bootstrap";

const Loading=({size=100})=>{

    return(<div style={{display: "flex",justifyContent:"center",alignItems:"center",width:"100px",height:"100px"}}>
  
  <Spinner style={{height:size,width:size}} animation="border"/>
    </div>)
}
export default Loading;