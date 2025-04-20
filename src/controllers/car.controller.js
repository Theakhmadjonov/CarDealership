import CarService from "../services/car.service.js";

class CarController {
  constructor() {
    this.carServcie = new CarService();
  }

  async createCarController(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async getAllCarController(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async getOneCarController(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async updateCarController(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async deleteCarController(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}
export default CarController;
