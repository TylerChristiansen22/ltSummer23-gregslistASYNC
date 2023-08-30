import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        const mappedHouses = response.data.map(dataObj => new House(dataObj))
        AppState.houses = mappedHouses
        console.log(response.data)
    }
    async createHouse(formData) {
        const response = await api.post('api/houses', formData)
        const newHouse = new House(response.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }

}


export const housesService = new HousesService()