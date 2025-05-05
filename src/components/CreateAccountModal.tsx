import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../graphql/accounts";

interface Props {
    onClose: () => void;
}

export const CreateAccountModal: React.FC<Props> = ({ onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [createAccount, { loading, error }] = useMutation(CREATE_ACCOUNT, {
        onCompleted: () => {
            onClose();
        },
        refetchQueries: ["ListAccountsWithPagination"],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createAccount({ variables: { name, email } });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl w-full max-w-md shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
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
                            {loading ? "Creating..." : "Create"}
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
