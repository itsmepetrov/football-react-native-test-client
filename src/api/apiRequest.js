const GRAPHQL_SERVER_URL = 'http://localhost:5000/graphql';

// GraphQL fetch API wrapper to easily communicate with the GraphQL server
// @query - GraphQL query (String)
// @variables - GraphQL query variables (Object)
export default function apiRequest(query, variables = {}) {
  return fetch(GRAPHQL_SERVER_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  }).then(res => res.json());
}
