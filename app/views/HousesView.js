export const HousesView = /*html*/ `
<div class="container-fluid">
      <section class="row">
        <div class="col-12">
          <button onclick="app.HousesController.drawCreateForm()" class="btn btn-primary" type="button"
            data-bs-toggle="collapse" data-bs-target="#houseFormCollapse" aria-expanded="false"
            aria-controls="collapseExample">List House 🏠</button>
        </div>
        <div class="collapse" id="houseFormCollapse">
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
          </form>
        </div>
      </section>
    </div>
    `