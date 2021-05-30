import {React, useEffect, useState} from 'react'

export const Covid = () => {
    const [data, setData] = useState([])

    const getCovidData = async () =>{
        try{
        const sData = await fetch('https://api.covid19india.org/data.json');
        const actualData = await sData.json();
        const d = setData(actualData.statewise[0]);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    }, [setData])
    return (
        <div>
            <h1>{data.recovered}</h1>
        </div>
    )
}
