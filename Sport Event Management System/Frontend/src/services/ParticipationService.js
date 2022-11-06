import axios from 'axios';

const PARTICIPATION_BASE_REST_API_URL = 'http://localhost:8086/participation';

class PlayerService{
    getParticipations(){
        return axios.get(PARTICIPATION_BASE_REST_API_URL+"/getParticipations");
    }
    addParticipation(participation){
        return axios.post(PARTICIPATION_BASE_REST_API_URL+"/addparticipation", participation);
    }
    updateStatus(participation_id,participation){
        return axios.put(PARTICIPATION_BASE_REST_API_URL + '/updateStatus/' + participation_id, participation);
    }
    getApprovedParticipations(status){
        return axios.get(PARTICIPATION_BASE_REST_API_URL+"/getApprovedParticipations/"+status);
    }
    getDeclinedParticipations(status){
        return axios.get(PARTICIPATION_BASE_REST_API_URL+"/getDeclinedParticipations/"+status);
    }
    getPendingParticipations(status){
        return axios.get(PARTICIPATION_BASE_REST_API_URL+"/getPendingParticipations/"+status);
    }
}
export default new PlayerService();