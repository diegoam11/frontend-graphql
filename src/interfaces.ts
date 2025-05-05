export interface IProduct {
    _id?: string;
    name: string;
    sku: string;
    accountId: string;
    account: IAccount;
    createdAt?: string;
    updatedAt?: string;
}

export interface IAccount {
    _id?: string;
    name: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}
