import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import QRCode from "./pages/qrcode";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    QRCode
  })
);


export default Routes;