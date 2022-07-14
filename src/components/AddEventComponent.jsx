import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import SportsEventService from '../services/SportsEventService';

const AddEventComponent = () => {

    const[eventName, setName] = useState('')
    const[eventDate, setDate] = useState('')
    const[noOfSlots, setSlots] = useState('')
    const[sportsName, setSportsName] = useState('')
    const navigate = useNavigate();
  
    const saveEvents = (e) => {
      e.preventDefault();
      const event = {eventName, eventDate, noOfSlots, sportsName}
      SportsEventService.addEvent(event).then(response =>{
        console.log(response.data)
        navigate('/events');
      }).catch(error => {
        console.log(error)
      })
    }
    return (
      <div className='container' style={{marginTop: "5px"}}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Event</h2>
            <div className="card-body">
              <form>
                <div className="form-control mb-2" style={{border: "none"}}>
                  <label className="form-label">Event Name:</label>
                  <input 
                    type="text"
                    placeholder="Enter Event Name"
                    name="eventName"
                    className="form-control"
                    value={eventName}
                    required
                    onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div className="form-control mb-2" style={{border: "none"}}>
                  <label className="form-label">Event Date:</label>
                  <input 
                    type="date"
                    placeholder="Enter Event Date"
                    name="eventDate"
                    className="form-control"
                    value={eventDate}
                    required
                    onChange = {(e) => setDate(e.target.value)}/>
                </div>
                <div className="form-control mb-2" style={{border: "none"}}>
                  <label className="form-label">No. of Slots :</label>
                  <input 
                    type="text"
                    placeholder="Enter No. of slots"
                    name="noOfSlots"
                    className="form-control"
                    value={noOfSlots}
                    required
                    onChange = {(e) => setSlots(e.target.value)}/>
                </div>
                <div className="form-control mb-2" style={{border: "none"}}>
                  <label className="form-label">Sports Name :</label>
                  <input 
                    type="text"
                    placeholder="Enter Sports Name"
                    name="sportsName"
                    className="form-control"
                    value={sportsName}
                    required
                    onChange = {(e) => setSportsName(e.target.value)}/>
                </div>
                <button className="btn btn-success" onClick={(e) => saveEvents(e)}>Save</button>
                <Link to="/events" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
/*class AddEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.eventId,
            eventName: this.props.match.params.eventName,
            eventDate: '',
            noofSlots: '',
            sportsName: ''
        }
        this.changeEventDateHandler = this.changeEventDateHandler.bind(this);
        this.changenoofSlotsHandler = this.changenoofSlotsHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){
        if(this.state.eventName === '_add'){
            return
        }else{
            SportsEventService.getEventsByName(this.state.eventName).then((res) =>{
                let event = res.data;
                this.setState({eventDate: event.eventDate,
                    noofSlots: event.noofSlots,
                    sportsName : event.sportsName
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let event = {eventDate: this.state.eventDate, noofSlots: this.state.noofSlots, emailId: this.state.emailId};
        console.log('event => ' + JSON.stringify(event));

        // step 5
        if(this.state.id === '_add'){
            SportsEventService.addEvent(event).then(res =>{
                this.props.history.push('/events');
            });
        }else{
            SportsEventService.updateEvent(event, this.state.id).then( res => {
                this.props.history.push('/events');
            });
        }
    }
    
    changeeventDateHandler= (event) => {
        this.setState({eventDate: event.target.value});
    }

    changenoofSlotsHandler= (event) => {
        this.setState({noofSlots: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Event Name: </label>
                                            <input placeholder="Event Name" name="eventName" className="form-control" 
                                                value={this.state.eventName} onChange={this.changeEventDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Event Date: </label>
                                            <input placeholder="Event Date" name="eventDate" className="form-control" 
                                                value={this.state.eventDate} onChange={this.changeNoofSlotsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> No. of Slots: </label>
                                            <input placeholder="No. of Slots" name="noofSlots" className="form-control" 
                                                value={this.state.noofSlots} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sports Name: </label>
                                            <input placeholder="Sports Name" name=" sportsName" className="form-control" 
                                                value={this.state. sportsName} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEvent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}*/

export default AddEventComponent
