import React, { useState } from "react";
import { IProduct } from "../interfaces";

interface Props {
    product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDetails = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <div
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white cursor-pointer"
            onClick={toggleDetails}
        >
            <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
            </h2>
            <p className="text-sm text-gray-500">SKU: {product.sku}</p>
            <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Cuenta ID: {product.account?.email}</span>
                <span
                    className={`transform transition-transform ${
                        expanded ? "rotate-180" : ""
                    }`}
                >
                    ▼
                </span>
            </div>

            {expanded && product.account && (
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                    <p>
                        <strong>Nombre:</strong> {product.account._id}
                    </p>
                    <p>
                        <strong>Email:</strong> {product.account.name}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
