import { gql } from "@apollo/client";

export const GET_ACCOUNTS = gql`
    query ListAccountsWithPagination($limit: Int!, $page: Int!) {
        listAccounts(limit: $limit, page: $page) {
            total
            accounts {
                _id
                email
                name
            }
        }
    }
`;
