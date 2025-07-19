import { useEffect, useState } from "react"

const Counter=({count, d})=>{
    useEffect(()=>{
        console.log("mounting phase only");
    }, []);

    useEffect(()=>{
        console.log("update phase only");
    }, [count]);
    
    useEffect(()=>{
       return()=>{
                  console.log("unmounting phase only");
       } 
    },[]);

    return(
        <div>
            <h1>counter value: {count}</h1>
            <h1>data value: {d}</h1>
        </div>
    )
}
export default Counter;