import React from "react";
import { IProduct } from "../interfaces";

interface Props {
    product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
            </h2>
            <p className="text-sm text-gray-500">SKU: {product.sku}</p>
            <p className="text-sm text-gray-400">
                Cuenta ID: {product.account?._id}
            </p>
        </div>
    );
};

export default ProductCard;
