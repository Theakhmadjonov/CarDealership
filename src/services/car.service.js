import CarModel from "../models/car.model.js";

class CarService {
  constructor() {
    this.carModel = CarModel;
  }

  async createCar(data) {}

  async getAllCar() {}

  async getOneCar(id) {}

  async updateCar(id, data) {}

  async deleteCar(id) {}
}
export default CarService;
