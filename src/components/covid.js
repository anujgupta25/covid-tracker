import React, {useState, useEffect} from 'react';
import '../App.css';

const Covid = ()=> {
    const [covidData, setCovidData] = useState([]);

    const api = async () => {
        const data = await fetch('https://api.covid19india.org/data.json');
        const res = await data.json();
        setCovidData(res.statewise[20]);
    }
    const checkName = ()=>{
        const name = prompt(`Whats your name ?`);

        if(name=="" || name == null){
            alert(`Welcome User ! This is Anuj.`);
        }else{
            alert(`Welcome ${name} ! This is Anuj.`);
        }   
    }
    useEffect(()=>{
        checkName();
        api();
    },[]);
    return (
            <div className='container pt-3'>
                <h3 className='text-center'><span className='live'>Live</span> <span className='text-dark'>Covid-19 Tracker</span></h3> 
                   
                <div className='row d-flex justify-content-betwen mx-2 mt-5'>
                <div className='col-md-3 m-md-4 mt-4 card card4'>
                    <p>State</p>
                    <span className='data'>{covidData.state}</span>
                </div>

                <div className='col-md-3 m-md-4 mt-4 card card1'>
                    <p>Active Cases</p>
                    <span className='data'>{covidData.active}</span>
                </div>

                <div className='col-md-3 m-md-4 mt-4 card card2'>
                    <p>Confirmed Cases</p>
                    <span className='data'>{covidData.confirmed}</span>
                </div>

                <div className='col-md-3 m-md-4 mt-4 card card3'>
                    <p>Total Deaths</p>
                    <span className='data'>{covidData.deaths}</span>
                </div>

                <div className='col-md-3 m-md-4 mt-4 card card5'>
                    <p>Total Recovered</p>
                    <span className='data'>{covidData.recovered}</span>
                </div>
                <div className='col-md-3 m-md-4 mt-4 card card6'>
                    <p>Last Updated at</p>
                    <span className='data'>{covidData.lastupdatedtime}</span>
                </div>
                <div className='col m-md-4 mt-4 card card7'>
                    <p>State Note</p>
                    <span className='data'>{covidData.statenotes}</span>
                </div>
                

                

            </div>                
            </div>
    )
}
export default Covid;
