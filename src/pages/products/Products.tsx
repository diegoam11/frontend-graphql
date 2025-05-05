import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/products";
import { IProduct } from "../../interfaces";
import { ProductCard } from "../../components/ProductCard";
import { AddProductsModal } from "../../components/AddProductsModal";

export const Products: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        variables: { limit: 20, page: 1 },
    });

    if (loading)
        return (
            <p className="text-center text-gray-500 mt-10">
                Loading Products...
            </p>
        );
    if (error)
        return (
            <p className="text-center text-red-500 mt-10">
                Error to load Products
            </p>
        );

    return (
        <div className="flex flex-col items-center w-full py-4 max-h-screen overflow-y-auto">
            <div className="flex flex-col justify-between items-center w-full max-w-4xl mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Products
                </h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition cursor-pointer"
                >
                    Add Products
                </button>
            </div>
            <div className="w-full max-w-4xl space-y-4 px-6">
                {data.listProducts.products.map((product: IProduct) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            {modalOpen && (
                <AddProductsModal onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
};

export default Products;
