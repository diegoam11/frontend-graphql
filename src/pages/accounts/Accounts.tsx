import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ACCOUNTS } from "../../graphql/accounts";
import AccountCard from "../../components/AccountCard";
import { IAccount } from "../../interfaces";
import { CreateAccountModal } from "../../components/CreateAccountModal";

export const Accounts: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const { loading, error, data } = useQuery(GET_ACCOUNTS, {
        variables: { limit: 10, page: 1 },
    });

    if (loading)
        return (
            <p className="text-center text-gray-500 mt-10">
                Cargando cuentas...
            </p>
        );
    if (error)
        return (
            <p className="text-center text-red-500 mt-10">
                Error al cargar cuentas.
            </p>
        );

    return (
        <div className="flex flex-col items-center w-full py-4 max-h-screen overflow-y-auto">
            <div className="flex flex-col justify-between items-center w-full max-w-4xl mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Accounts
                </h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition cursor-pointer"
                >
                    Create Account
                </button>
            </div>
            <div className="w-full max-w-4xl space-y-4 px-6">
                {data.listAccounts.accounts.map((account: IAccount) => (
                    <AccountCard key={account._id} account={account} />
                ))}
            </div>
            {modalOpen && (
                <CreateAccountModal onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
};

export default Accounts;
