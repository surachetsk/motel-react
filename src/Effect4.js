import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container} from 'react-bootstrap';

function Effect4(){

    const [dataArray, setDataArray ] = useState([])

    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/posts",{
        params: {
          _limit: 10
         }
      })
      
      .then(result=>{
        const {data} = result
       console.log(result.data);
       //alert(JSON.stringify(data))
       setDataArray(data)
       })
    }, [])

    return(
      <Container>
      <div className="row">

      {
       dataArray.map(items =>  {
         return (
          <Col lg="6" className="text-center" key={items.id}>
          <h4>{items.title}</h4>
          <div>{items.body}</div></Col>
         )
       })
      }
  
  </div>
  </Container>
    )

}


export default Effect4;