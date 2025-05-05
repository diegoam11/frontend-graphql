import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ACCOUNTS } from "../../graphql/accounts";
import AccountCard from "../../components/AccountCard";

interface Account {
    _id: string;
    email: string;
    name: string;
}

export const Accounts: React.FC = () => {
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
        <div className="flex flex-col items-center w-full px-4 py-6 overflow-y-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Cuentas</h1>
            <div className="w-full max-w-4xl space-y-4">
                {data.listAccounts.accounts.map((account: Account) => (
                    <AccountCard key={account._id} account={account} />
                ))}
            </div>
        </div>
    );
};

export default Accounts;
