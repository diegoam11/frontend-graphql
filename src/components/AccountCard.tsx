import React from "react";
import { IAccount } from "../interfaces";

interface Props {
    account: IAccount;
}

const AccountCard: React.FC<Props> = ({ account }) => {
    return (
        <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-lg font-semibold text-gray-800">
                {account.name}
            </h2>
            <p className="text-sm text-gray-500">Email: {account.email}</p>
            <p className="text-sm text-gray-400">ID: {account._id}</p>
        </div>
    );
};

export default AccountCard;
