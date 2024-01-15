import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

    const [number, setNumber] =useState(0);
    const colors = ["red", "orange", "yellow", "green", "blue", "violet" ];

    useEffect(() => {
        if(number > colors.length - 1) {
            setNumber(0);
            console.log("Changing number value back to 0 " + colors[0]);

        } else {       
            console.log("changing number value: " + colors[number]);
        }
            
         //number is position of color array
         // which will change the background color of the button
         console.log("changing number value: " + colors[number]);
    }, [number]) //when number changes, it triggers to useEffect work

    return(
        <>
        <h1>Example 3</h1>
            <button 
                style={{backgroundColor: colors[number]}} 
                onClick={() => setNumber(number + 1)}>
                    increment Number
                    </button> 
        <div>
            {number}
        </div>


</>
    )
} 