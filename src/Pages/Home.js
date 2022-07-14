import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,useNavigate
} from "react-router-dom";
export default function Home() {
  const navigate= useNavigate();
  const navigateSports = () => { 
    navigate('/sports');
  };
  const navigatePlayers = () => { 
    navigate('/players');
  };
  const navigateParticipation = () => { 
    navigate('/participations');
  };
  return (
    <div className='container'>
        <div className='py-4'>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button" onClick={navigateSports} >Sports and Events</button>
            <button class="btn btn-primary" type="button" onClick={navigatePlayers}>Players</button>
            <button class="btn btn-primary" type="button" onClick={navigateParticipation}>Participation</button>
        </div>
        </div>
    </div>
  )
}
