import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import PlayerService from '../services/PlayerService'

const AddPlayerComponent = () => {

  const[playerName, setName] = useState('')
  const[age, setAge] = useState()
  const[contactNumber, setContact] = useState()
  const[email, setEmail] = useState('')
  const[gender, setGender] = useState('')
  const[sportsName, setSportsName] = useState('')
  const navigate = useNavigate();

  const savePlayer = (e) => {
    e.preventDefault();
    const player = {playerName, age, contactNumber, email, gender, sportsName}
    PlayerService.createPlayer(player).then(response =>{
      console.log(response.data)
      navigate('/players');

    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className='container' style={{marginTop: "5px"}}>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Player</h2>
          <div className="card-body">
            <form>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Name :</label>
                <input 
                  type="text"
                  placeholder="Enter name"
                  name="playerName"
                  className="form-control"
                  value={playerName}
                  required
                  onChange = {(e) => setName(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Age :</label>
                <input 
                  type="number"
                  placeholder="Enter age"
                  name="age"
                  className="form-control"
                  value={age}
                  required
                  onChange = {(e) => setAge(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Contact No. :</label>
                <input 
                  type="number"
                  placeholder="Enter contact"
                  name="contactNumber"
                  className="form-control"
                  value={contactNumber}
                  required
                  onChange = {(e) => setContact(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Email :</label>
                <input 
                  type="email"
                  placeholder="Enter emailId"
                  name="email"
                  className="form-control"
                  value={email}
                  required
                  onChange = {(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Gender :</label>
                <select className='form-select'
                  name="gender"
                  value={gender}
                  required
                  onChange = {(e) => setGender(e.target.value)}>
                  <option selected>Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-control mb-2" style={{border: "none"}}>
                <label className="form-label">Sportsname :</label>
                <input 
                  type="text"
                  placeholder="Enter sportsname"
                  name="sportsName"
                  className="form-control"
                  value={sportsName}
                  required
                  onChange = {(e) => setSportsName(e.target.value)}/>
              </div>
              <button className="btn btn-success" onClick={(e) => savePlayer(e)}>Save</button>
              <Link to="/players" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPlayerComponent
