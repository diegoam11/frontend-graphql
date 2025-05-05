import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { Accounts } from "./pages/accounts/Accounts";
import { Home } from "./pages/home/home";
import { Products } from "./pages/products/Products";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
};
