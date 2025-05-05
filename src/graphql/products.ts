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
