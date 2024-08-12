import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import  store  from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import dummyLogo from "../../mocks/dummyLogo";

test("logo should be load on render", () => {
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>

    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});


test("cart should have 0 item on render", () => {
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>

    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});