import { useDispatch, useSelector } from "react-redux"

export default function Home(){
    const counterVal= useSelector((state)=> state.counter);
    const dispatch= useDispatch();
    const add= ()=>{
        dispatch({
            type:'add'
        })
    }
    const sub= ()=>{
        dispatch({
            type:'sub'
        })
    }
    return(
        <>
        <h1>HOME PAGE</h1>
        <button onclick={add}>ADDITION</button>
        <button onclick={sub}>SUBRACT</button>
        <h1>from redux {counterVal}</h1>

        </>
    )
}