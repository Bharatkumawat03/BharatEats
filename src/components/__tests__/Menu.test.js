import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import Body from "../Body";
import store from "../../utils/store";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { RESTAURENT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";
import RestaurentMenu from "../RestaurentMenu";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
           return Promise.resolve(RESTAURENT_DATA);
        },
    });
});

test("add items to cart", () =>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurentMenu/>
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(10);
    // console.log(shimmer);
})

// test("restaurent load on home page", async () =>{
//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body/>
//             </Provider>
//         </StaticRouter>
//     )

//     await waitFor(() => expect(body.getByTestId("search-btn")))
//     const resList = body.getByTestId("res-list")
//     expect(resList.children.length).toBe(10);
//     // console.log(shimmer);
// })


// test("search results on home page", async () =>{
//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body/>
//             </Provider>
//         </StaticRouter>
//     )

//     await waitFor(() => expect(body.getByTestId("search-btn")));
//     const input = body.getByTestId("search-input");

//     fireEvent.change(input, {
//         target: {
//             value: "food",
//         },
//     });

//     const searchBtn = body.getByTestId("search-btn");
//     fireEvent.click(searchBtn);
//     const resList = body.getByTestId("res-list")
//         expect(resList.children.length).toBe(10);
// })