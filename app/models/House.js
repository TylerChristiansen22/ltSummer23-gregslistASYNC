export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }

    get houseTemplate() {
        return/*html*/`
        <section class="row justify-content-center my-5">
        <div class="col-8 elevation-5 text-center">
          <span>$${this.price}, ${this.bedrooms} Bedrooms, ${this.bathrooms} Bathrooms</span>
          <div class="row">
            <div class="col-4">
              <img class="w-100" src="${this.imgUrl}" alt="No img provided">
            </div>
            <div class="col-8 justify-content-between">
              <span>${this.levels} stories</span>
              <span>Made in ${this.year}</span>
              <br>
              <span>${this.description}</span>
            </div>
          </div>
        </div>
      </section>`
    }
}