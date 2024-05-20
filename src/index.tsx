import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'

import HomePege from "./components/pages/HomePege";
import ProductsPage from "./components/pages/ProductsPage";
import DetailsPage from "./components/pages/DetailsPage";
import CartPage from "./components/pages/CartPage";
import Layout from "./components/organisms/Layout";
import {CartProvider} from "./components/store";

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route index element={<HomePege />} />
                  <Route path={"/products"} element={<ProductsPage />} />
                  <Route path={"/products/:productId"} element={<DetailsPage />} />
                  <Route path={"/cart"} element={<CartPage />} />
              </Route>
          </Routes>
      </BrowserRouter></CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
