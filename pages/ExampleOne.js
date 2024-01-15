import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);
    /**
     * usually this will cause an infinit loop so it is best to not do this in case your code breaks. 
     * code on pages will run two times.
     * Once to render what we want and anoter is to render strict mode to find any common bugs. 
     */
    useEffect(() => {
        console.log(number);

    })

    return(
        <>
            <Header/>
            <main>
                <h1> Example 1</h1>
                <div>Infinite Loop </div>
                {number}
            </main>
            <Footer/>

        </>
    )
}