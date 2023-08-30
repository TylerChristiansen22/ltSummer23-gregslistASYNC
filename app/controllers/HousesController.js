import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
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
    async createHouse() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await housesService.createHouse(formData)
            console.log('create')
            // @ts-ignore
            form.reset()
        } catch (error) {
            // @ts-ignore
            Pop.error(error.message)
        }
    }

    drawCreateForm() {
        console.log('Drawing the house form')
        setHTML('houseFormCollapse', House.createHouseForm())
    }
}