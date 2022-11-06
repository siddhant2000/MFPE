import axios from 'axios';

const SPORTS_API_BASE_URL = "http://localhost:8087/sport";
const EVENTS_API_BASE_URL = "http://localhost:8087/event";

class SportsEventService {

    sports(){
        return axios.get(SPORTS_API_BASE_URL + '/sports');
    }

    getSportsByName(sportsName){
        return axios.get(SPORTS_API_BASE_URL + '/getSportsByName/' +sportsName);
    }

    events(){
        return axios.get(EVENTS_API_BASE_URL+ '/events');
    }

    addEvent(event){
        return axios.post(EVENTS_API_BASE_URL+ '/addEvent', event);
    }

    getEventsByName(eventName){
        return axios.get(EVENTS_API_BASE_URL + '/eventByName/' +eventName);
    }

    deleteEvent(eventId){
        return axios.delete(EVENTS_API_BASE_URL + '/deleteEvent/' + eventId);
    }
}

export default new SportsEventService()