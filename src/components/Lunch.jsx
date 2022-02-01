import React,{ useState} from 'react'
import API from '../LunchApi'
import {Link } from 'react-router-dom'
// import LunchCard from './LunchCard'
import Tooltip from '@mui/material/Tooltip';

const Lunch = ({setChoose}) => {
    const handleClick = (event)=>{
        
        setChoose(event.target.innerText);
        const h = event.target.innerText;
        console.log(h);
       
    }
    const [data,setData] = useState(API)
    
    return (
        <>
        
        <div className="mainDiv"><h1 className="head mt-3">Lunch</h1></div>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-18 mx-auto">
        <div class="flex flex-wrap -m-4">
            {
                data.map((e)=>{
                    return(
                        <>
                          <div class="p-4 item md:w-1/4">
                              <div class="h-full border-2 car border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={e.image} alt="blog"/>
                                    <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{e.type}</h2>
                                    <Tooltip title="View More">
                                    <Link to='/view'><h1 class="title-font text-lg font-medium text-black-900 mb-3" onClick={handleClick}>{e.name}</h1></Link>
                                    </Tooltip>
                                    <p class="leading-relaxed mb-3">{e.details}</p>
                                      <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center a1 md:mb-2 lg:mb-0">Order Now
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>{e.views}
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>{e.comments}
                                        </span>
            </div>
                                    </div>
                              </div>
                          </div>
                        </>
                    )
                })
            }
        </div>
        </div>
           </section>
           </>
    )
}

export default Lunch
