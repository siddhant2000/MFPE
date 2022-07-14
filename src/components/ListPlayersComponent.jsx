import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PlayerService from '../services/PlayerService'

const ListPlayersComponent = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        getAllPlayers();
    }, [])

    const getAllPlayers = () => {
        PlayerService.getAllPlayers().then((response) => {
            setPlayers(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deletePlayer = (playerId) => {
        PlayerService.deletePlayer(playerId).then((response) =>{
            getAllPlayers();
        }).catch(error =>{
            console.log(error)
        })
    }

  return (
    <div className='container'>
      <h2 className="text-center">Players List</h2>
      <Link to="/addPlayer" className="btn btn-primary mb-2">Add Player</Link>
      <table className="table table-bordered table-striped">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Sportsname</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                players.map(
                    player =>
                    <tr key={player.playerId}>
                        <td>{player.playerId}</td>
                        <td>{player.playerName}</td>
                        <td>{player.age}</td>
                        <td>{player.contactNumber}</td>
                        <td>{player.email}</td>
                        <td>{player.gender}</td>
                        <td>{player.sportsName}</td>
                        <td><button className="btn btn-danger" onClick={() => deletePlayer(player.playerId)}>Delete</button></td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListPlayersComponent
