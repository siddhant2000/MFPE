import React, { Component } from 'react'
import SportsEventService from '../services/SportsEventService'

class ViewEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: this.props.match.params.eventName,
            event: {}
        }
    }

    componentDidMount(){
        SportsEventService.getEventByName(this.state.Name).then( res => {
            this.setState({event: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Event Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Event Name: </label>
                            <div> { this.state.event.eventName }</div>
                        </div>
                        <div className = "row">
                            <label> Event Date: </label>
                            <div> { this.state.event.eventDate }</div>
                        </div>
                        <div className = "row">
                            <label> No. of slots: </label>
                            <div> { this.state.event.noofSlots }</div>
                        </div>
                        <div className = "row">
                            <label> Sports Name: </label>
                            <div> { this.state.event.sportsName }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEventComponent
