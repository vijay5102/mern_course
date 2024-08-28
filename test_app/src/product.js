import {useState} from 'react';
export default function Register1(){
    const[userlist,setUserList] = useState([])
    async function postApi(){
        let data = {
            "product":product,
        
        };
            let res = await fetch("https://api.restful-api.dev/objects",
            {"method":"POST",body: JSON.stringify(data),headers:{"content-type":"application/json"}
        });
            let userdata = await res.json();
            console.log(userdata);
            
    }
    return(
        <div>
        <p>Product</p>
        <input type="text" onChange={(e)=>product(e.target.value)}></input><br></br>
        <button onClick={postApi}>Submit</button>
        </div>
        )
        
    }