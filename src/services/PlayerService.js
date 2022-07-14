import axios from 'axios';

const PLAYER_BASE_REST_API_URL = 'http://localhost:8091/player';

class PlayerService{
    getAllPlayers(){
        return axios.get(PLAYER_BASE_REST_API_URL+"/players");
    }
    createPlayer(player){
        return axios.post(PLAYER_BASE_REST_API_URL+"/addPlayer", player);
    }
    deletePlayer(playerId){
        return axios.delete(PLAYER_BASE_REST_API_URL+"/deletePlayer/"+playerId);
    }
}
export default new PlayerService();