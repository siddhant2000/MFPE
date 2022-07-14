import React, {useState, useEffect} from 'react'
import SportsEventService from '../services/SportsEventService'
import {
    BrowserRouter as Router,
    Routes,Link,
    Route,useNavigate
  } from "react-router-dom";

        const ListSportsComponent = () => {

            const [sports, setSports] = useState([])
        
            useEffect(() => {
                getAllsports();
            }, [])
        
            const getAllsports = () => {
                SportsEventService.sports().then((response) => {
                    setSports(response.data)
                    console.log(response.data);
                }).catch(error => {
                    console.log(error);
                })
            }
    
          return (
            <div className='container'>

              <h2 className="text-center">Sports List</h2>
              <table className="table table-bordered table-striped">
                <thead>
                    <th> Sports Id</th>
                    <th> No. of Players</th>
                    <th> Sports Name</th>
                    <th> Sports Type</th>
                    <th> Actions</th>
                </thead>
                <tbody>
                    {
                        sports.map(
                            sport =>
                            <tr key = {sport.sportsId}>
                                    <td> {sport.sportsId} </td>   
                                    <td> {sport.noOfPlayers}</td>
                                    <td> {sport.sportsName}</td>
                                    <td> {sport.sportsType}</td>
                                    <td>
                                    <Link className="btn btn-info" to={`/getSportsByName/${sport.sportsName}`} >View</Link>
                                    </td>
                            </tr>
                        )
                    }
                </tbody>
              </table>
              <Link to="/events" className="btn btn-primary mb-2">Events Mangemnt</Link>
            </div>
          )
        }
/*class ListSportsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                sports: []
        }
    }

    viewSports(Name){
        this.props.history.push(`/View-sport/${Name}`);
    }

    componentDidMount(){
        SportsEventService.sports().then((res) => {
            this.setState({ sports : res.data});
        });
    }


    render() {
        
        return (
            <div className='container'>
                 <h2 className="text-center">Sports List</h2>
                 <div className="py-4">
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Sports Id</th>
                                    <th> No. of Players</th>
                                    <th> Sports Name</th>
                                    <th> Sports Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1001</td>
                                    <td>2</td>
                                    <td>Chess</td>
                                    <td>Indoor</td>
                                </tr>
                                {
                                    this.state.sports.map(
                                        sport => 
                                        <tr key = {sport.sportsId}>
                                             <td> {sport.sportsId} </td>   
                                             <td> {sport.noOfPlayers}</td>
                                             <td> {sport.sportsName}</td>
                                             <td> {sport.sportsType}</td>
                                             <td>
                                             <button onClick={ () => this.viewSports(sport.sportsName)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                </div>
                <button class="btn btn-primary" type="button" onClick={navigateEvents} >Events</button>
            </div>
        )
    }
}*/

export default ListSportsComponent