import authRouter from "./auth.route.js";
import carRouter from "./car.route.js";
import userRouter from "./user.route.js";

const Routes = () => [userRouter, authRouter, carRouter];
export default Routes;
