import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ParticipationService from '../services/ParticipationService'

const ListPendingParticipationComponent = () => {

        const [participations, setPendingParticipations] = useState([])
    
        useEffect(() => {
            getPendingParticipations();
        }, [])
    
        const getPendingParticipations = () => {
            ParticipationService.getPendingParticipations().then((response) => {
                setPendingParticipations(response.data)
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
        }

  return (
    <div className='container'>
      <h2 className="text-center">Pending Participations List</h2>
      <table className="table table-bordered table-striped">
        <thead>
            <th>Participation Id</th>
            <th>Player Id</th>
            <th>Event Id</th>
            <th>Event Name</th>
            <th>Sports Id</th>
            <th>Sports Name</th>
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
                        <td>{participation.sports_name}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListPendingParticipationComponent

