import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    console.log("drawing Houses")
    let template = ''
    AppState.houses.forEach(house => template += house.houseTemplate)
    setHTML('houses', template)
}


export class HousesController {
    constructor() {
        console.log("hello from the Houses Controller")
        this.getHouses()
        AppState.on('houses', _drawHouses)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            // @ts-ignore
            Pop.error(error.message)
        }
    }
}