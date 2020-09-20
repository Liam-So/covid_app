import axios from 'axios'

const url = 'https://covid19.mathdro.id/api' ; 

export const fetchData = async () => {
    try {
        // axios url returns an object, we are only concerned with the data so we destructure it
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url) ; 

        return {confirmed, recovered, deaths, lastUpdate} ; 
        
    } catch (error) {

    }
}