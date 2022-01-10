import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { OrderDetailsPage } from "./pages/OrderDetailsPage";
import { OrdersMainPage } from "./pages/OrdersMainPage";
import { ORDERS_MAIN_PAGE, ORDER_DETAILS_PAGE } from "./routes";

function App() {
  return (
    <Routes>
      <Route path={ORDERS_MAIN_PAGE} element={<OrdersMainPage />} />
      <Route path={ORDER_DETAILS_PAGE} element={<OrderDetailsPage />} />
    </Routes>
  );
}

export default App;
