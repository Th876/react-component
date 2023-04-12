import {useState} from "react";

export default function Visits () {

    let [counter, setCounter] = useState(0);

    const countryStats = [
        {name: "United States ➜", title: "Visitors per Month: ", visitors: 450},
        {name: "Canada ➜", title: "Visitors per Month: ", visitors: 100},
        {name: "England ➜", title: "Visitors per Month: ", visitors: 50},
        {name: "Ireland ➜", title: "Visitors per Month: ", visitors: 150},
        {name: "Scotland ➜", title: "Visitors per Month: ", visitors: 5},
        {name: "Alaska ➜", title: "Visitors per Month: ", visitors: 60},
        {name: "Wales ➜", title: "Visitors per Month: ", visitors: 6},
    ]


    const webSiteInfo = countryStats.map((country, index) => {
        return (
            <div key={index}>
            <h3>{country.name} {country.title} {country.visitors}</h3>
            </div>
        )
    })
    
   
    return(
    <div className="visits-box">
        <h3>Website Visitors</h3>
        <p className="visitor-count">821</p>
        <div className="counter-box">
            <h3 className="count">{counter}</h3>
            <br/>
            <button variant="light" onClick={() => setCounter(counter + 1)}>Click To Increase</button>
        </div>
        
        <div className="countryStats">
        {webSiteInfo}
        </div>
    </div>
    )
}