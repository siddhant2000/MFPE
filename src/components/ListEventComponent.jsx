import React, {useState, useEffect} from 'react'
import SportsEventService from '../services/SportsEventService'

import {
    BrowserRouter as Router,
    Routes,Link,
    Route,useNavigate
  } from "react-router-dom";

        const ListEventComponent = () => {

            const [events, setEvents] = useState([])
        
            useEffect(() => {
                getAllEvents();
            }, [])
        
            const getAllEvents = () => {
                SportsEventService.events().then((response) => {
                    setEvents(response.data)
                    console.log(response.data);
                }).catch(error => {
                    console.log(error);
                })
            }

            const deleteEvent = (eventId) => {
                SportsEventService.deleteEvent(eventId).then((response) =>{
                    getAllEvents();
                }).catch(error =>{
                    console.log(error)
                })
            }
        
          return (
            <div className='container' style={{marginTop: "10px"}}>
            <Link to="/addEvent" className="btn btn-primary mb-2">Add Event</Link>
              <h2 className="text-center">Events List</h2>
              <table className="table table-bordered table-striped">
              <thead>
                                <tr>
                                    <th> Event Id</th>
                                    <th> Event Name</th>
                                    <th> Event Date</th>
                                    <th> No. Of Slots</th>
                                    <th> Sports Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events.map(
                                        event => 
                                        <tr key = {event.eventId}>
                                            <td>  {event.eventId} </td>
                                             <td> {event.eventName} </td>   
                                             <td> {event.eventDate} </td>   
                                             <td> {event.noOfSlots}</td>
                                             <td> {event.sportsName}</td>
                                             <td>
                                                 <button onClick={() => deleteEvent(event.eventId)} className="btn btn-danger">Delete </button>
                                                 <Link style={{marginLeft: "10px"}} className="btn btn-info" to={`/eventByName/${event.eventName}`} >View</Link>
                                             </td>
                                        </tr>
                                    )
                                }
                </tbody>
              </table>
            </div>
          )
        }
/*class ListEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                events: []
        }
        this.addEvent = this.addEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent(id){
        SportsEventService.deleteEvent(id).then( res => {
            this.setState({events: this.state.events.filter(event => event.eventId !== id)});
        });
    }
    viewEvent(Name){
        this.props.history.push(`/view-event/${Name}`);
    }
    editEvent(id){
        this.props.history.push(`/add-event/${id}`);
    }

    componentDidMount(){
        SportsEventService.sports().then((res) => {
            this.setState({ sports : res.data});
        });
    }

    addEvent(){
        this.props.history.push('/addEvent/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Events List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEvent}> Add Event</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Event Name</th>
                                    <th> Event Date</th>
                                    <th> No. of slots</th>
                                    <th> Sports Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.events.map(
                                        event => 
                                        <tr key = {event.eventId}>
                                             <td> {event.eventName} </td>   
                                             <td> {event.eventDate} </td>   
                                             <td> {event.noofSlots}</td>
                                             <td> {event.sportsName}</td>
                                             <td>
                                                 <button onClick={ () => this.editEvent(event.eventId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEvent(event.eventId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEvent(event.eventName)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}*/

export default ListEventComponent
