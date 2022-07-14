import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ParticipationService from '../services/ParticipationService'

const ListParticipationComponent = () => {

    const[status, setStatus] = useState('')
    const [participations, setParticipations] = useState([])

    useEffect(() => {
        getParticipations();
    }, [])

    const getParticipations = () => {
        ParticipationService.getParticipations().then((response) => {
            setParticipations(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const updateStatus = (participation_id) => {
        ParticipationService.updateStatus(participation_id).then((response) =>{
            getParticipations();
        }).catch(error =>{
            console.log(error)
        })
    }

  return (
    <div className='container'>
      <h2 className="text-center">List participations</h2>
      <Link to="/addParticipation" className="btn btn-primary mb-2">Add participation</Link>
      <div className="form-control mb-2" style={{border: "none"}}>
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
        <Link to="/getParticipations/Declined" className="btn btn-primary mb-2">Check participation</Link>    
      <table className="table table-bordered table-striped">
        <thead>
            <th>Participation Id</th>
            <th>Player Id</th>
            <th>Event Id</th>
            <th>Event Name</th>
            <th>Sports Id</th>
            <th>Sports Name</th>
            <th>Status</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                participations.map(
                    participation =>
                    <tr key={participation.participation_id}>
                        <td>{participation.player_id}</td>
                        <td>{participation.player_name}</td>
                        <td>{participation.event_id}</td>
                        <td>{participation.event_name}</td>
                        <td>{participation.sports_id}</td>
                        <td>{participation.sports_Name}</td>
                        <td>{participation.status}</td>
                        <td><button className="btn btn-danger" onClick={() => updateStatus(participation.Participation_id)}>Update Status</button></td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListParticipationComponent
