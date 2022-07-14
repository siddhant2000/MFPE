import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ParticipationService from '../services/ParticipationService'

const ListDeclinedParticipationComponent = () => {

    const [participations, setDeclinedParticiptions] = useState([])
    
        useEffect(() => {
            getDeclinedParticiptions();
        }, [])
    
        const getDeclinedParticiptions = () => {
            ParticipationService.getDeclinedParticipations().then((response) => {
                setDeclinedParticiptions(response.data)
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
        }
    
  return (
    <div className='container'>
      <h2 className="text-center">Declined Participations List</h2>
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
                    <tr key={participation.Participation_id}>
                        <td>{participation.Player_id}</td>
                        <td>{participation.Player_name}</td>
                        <td>{participation.Event_id}</td>
                        <td>{participation.Event_name}</td>
                        <td>{participation.Sports_id}</td>
                        <td>{participation.Sports_Name}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListDeclinedParticipationComponent
