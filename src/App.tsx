import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_API_URL,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <AppRouter />
            </HashRouter>
        </ApolloProvider>
    );
}

export default App;
