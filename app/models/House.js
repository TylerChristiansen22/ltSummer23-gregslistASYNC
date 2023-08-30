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
  static createHouseForm() {
    return /*html*/ `
      <form class="row p-2" onsubmit="app.HousesController.createHouse()">
            <div class="form-floating mb-3 col-4">
              <input required type="text" minLength="10" maxLength="50" class="form-control" id="houseDescription"
                name="description" placeholder="House Description">
              <label for="houseDescription">Description of the House</label>
            </div>
            <div class="form-floating mb-3 col-4">
              <input required type="number" class="form-control" id="numberOfBedrooms" name="bedrooms"
                placeholder="Number of Bedrooms" min=1>
              <label for="numberOfBedrooms"># of Bedrooms?</label>
            </div>
            <div class="form-floating mb-3 col-4">
              <input required type="number" class="form-control" id="numberOfBathrooms" name="bathrooms"
                placeholder="Number of Bathrooms" min=1>
              <label for="numberOfBathrooms"># of Bathrooms?</label>
            </div>
            <div class="form-floating mb-3 col-4">
              <input required type="number" class="form-control" id="numberOfStories" name="levels"
                placeholder="Number of Stories" min=1>
              <label for="numberOfStories"># of Stories?</label>
            </div>
            <div class="form-floating mb-3 col-4">
              <input required type="number" class="form-control" id="yearMade" name="year" placeholder="Year Made"
                min=1950>
              <label for="yearMade">Year Made?</label>
            </div>
            <div class="form-floating mb-3 col-4">
              <input required type="number" class="form-control" id="priceOfHouse" name="price"
                placeholder="Price of House" min=0 max=1000000>
              <label for="priceOfHouse">House Price?</label>
            </div>
            <div class="form-floating mb-3 col-4">
              <input required type="text" class="form-control" id="houseImg" name="imgUrl" placeholder="Img of House">
              <label for="houseImg">URL to house image:</label>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-info">Create Listing</button>
            </div>
          </form>`
  }
}