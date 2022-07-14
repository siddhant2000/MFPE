import React, { useState } from 'react'
import {Link, useNavigate, useHistory, useParams } from 'react-router-dom'
import ParticipationService from '../services/ParticipationService'

const AddParticipationComponent = () => {

  const[player_id, setPlayerId] = useState('')
  const[event_name, setEventName] = useState('')
  const[sports_name, setSportsName] = useState('')
  const[status, setStatus] = useState('')
  //const history = useHistory();
  const {id} = useParams();
  const navigate = useNavigate();

  const  saveOrUpdateParticipation = (e) => {
    e.preventDefault();
    const participation = {player_id, event_name, sports_name, status}

    if(id){
      ParticipationService.updateStatus(id, participation).then((response) => {
          navigate('/getParticipations')
      }).catch(error => {
          console.log(error)
      })
  }else{
    ParticipationService.addParticipation(participation).then(response =>{
      console.log(response.data)
      navigate('/getParticipations');

    }).catch(error => {
      console.log(error)
    })
  }
}
  return (
    <div className='container' style={{marginTop: "5px"}}>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Participation</h2>
          <div className="card-body">
            <form>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Player Id:</label>
                <input 
                  type="text"
                  placeholder="Enter Player Id"
                  name="player_id"
                  className="form-control"
                  value={player_id}
                  required
                  onChange = {(e) => setPlayerId(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Event Name :</label>
                <input 
                  type="text"
                  placeholder="Enter Event Name"
                  name="event_name"
                  className="form-control"
                  value={event_name}
                  required
                  onChange = {(e) => setEventName(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Sports Name :</label>
                <input 
                  type="text"
                  placeholder="Enter sports Name"
                  name="sports_name"
                  className="form-control"
                  value={sports_name}
                  required
                  onChange = {(e) => setSportsName(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Status :</label>
                <select className='form-select'
                  name="status"
                  value={status}
                  required
                  onChange = {(e) => setStatus(e.target.value)}>
                  <option selected>Select...</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <button className="btn btn-success" onClick={(e) =>  saveOrUpdateParticipation(e)}>Save</button>
              <Link to="/getParticipations" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddParticipationComponent;
