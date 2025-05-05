import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query ListProductsWithPagination($limit: Int!, $page: Int!) {
        listProducts(limit: $limit, page: $page) {
            total
            products {
                _id
                sku
                name
                account {
                    _id
                }
            }
        }
    }
`;

export const ADD_PRODUCTS = gql`
    mutation AddProducts($accountId: ID!, $products: [ProductInput!]!) {
        addProducts(accountId: $accountId, products: $products) {
            _id
            name
            sku
        }
    }
`;
