import React, { Component } from 'react'
import SportsEventService from '../services/SportsEventService'

class ViewSportsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: this.props.match.params.sportsName,
            sport: {}
        }
    }

    componentDidMount(){
        SportsEventService.getSportsByName(this.state.Name).then( res => {
            this.setState({sport: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Sport Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Sports Id: </label>
                            <div> { this.state.sport.sportsId }</div>
                        </div>
                        <div className = "row">
                            <label> No. of Players: </label>
                            <div> { this.state.sport.noOfPlayers }</div>
                        </div>
                        <div className = "row">
                            <label> Sports Name: </label>
                            <div> { this.state.sport.sportsName }</div>
                        </div>
                        <div className = "row">
                            <label> Sports Type: </label>
                            <div> { this.state.sport.sportsType }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSportsComponent
