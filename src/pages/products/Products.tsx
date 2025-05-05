import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/products";
import { IProduct } from "../../interfaces";
import { ProductCard } from "../../components/ProductCard";

export const Products: React.FC = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        variables: { limit: 20, page: 1 },
    });

    if (loading)
        return (
            <p className="text-center text-gray-500 mt-10">
                Cargando productos...
            </p>
        );
    if (error)
        return (
            <p className="text-center text-red-500 mt-10">
                Error al cargar productos.
            </p>
        );

    return (
        <div className="flex flex-col items-center w-full px-4 py-6 overflow-y-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Productos</h1>
            <div className="w-full max-w-4xl space-y-4">
                {data.listProducts.products.map((p: IProduct) => (
                    <ProductCard key={p._id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default Products;
