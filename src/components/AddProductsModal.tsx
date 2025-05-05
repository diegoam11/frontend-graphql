import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PRODUCTS } from "../graphql/products";
import { GET_ACCOUNTS } from "../graphql/accounts";

interface Props {
    onClose: () => void;
}

export const AddProductsModal: React.FC<Props> = ({ onClose }) => {
    const [accountId, setAccountId] = useState("");
    const [products, setProducts] = useState([{ name: "", sku: "" }]);

    const { data: accountsData, refetch: refetchAccounts } = useQuery(
        GET_ACCOUNTS,
        {
            variables: { limit: 50, page: 1 },
        }
    );

    React.useEffect(() => {
        console.log("ENTRA USE EFFECT");
        refetchAccounts();
    }, [refetchAccounts]);

    const [addProducts, { loading, error }] = useMutation(ADD_PRODUCTS, {
        onCompleted: () => onClose(),
        refetchQueries: ["ListProductsWithPagination"],
    });

    const handleChange = (
        index: number,
        field: "name" | "sku",
        value: string
    ) => {
        const updated = [...products];
        updated[index][field] = value;
        setProducts(updated);
    };

    const addNewProduct = () => {
        setProducts([...products, { name: "", sku: "" }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProducts({ variables: { accountId, products } });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl w-full max-w-md shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Products
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <select
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        required
                    >
                        <option value="" disabled>
                            Select Account
                        </option>
                        {accountsData?.listAccounts.accounts.map((acc: any) => (
                            <option key={acc._id} value={acc._id}>
                                {acc.email}
                            </option>
                        ))}
                    </select>

                    <div className="max-h-60 overflow-y-auto space-y-4">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="space-y-2 border border-gray-200 rounded-xl p-4 bg-gray-50"
                            >
                                <p className="text-sm font-medium text-gray-600">
                                    Producto #{index + 1}
                                </p>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={product.name}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="SKU"
                                    value={product.sku}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "sku",
                                            e.target.value
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={addNewProduct}
                        className="text-sm text-blue-600 hover:underline cursor-pointer"
                    >
                        + Add other product
                    </button>
                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
                        >
                            {loading ? "Adding..." : "Add"}
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            Error: {error.message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
