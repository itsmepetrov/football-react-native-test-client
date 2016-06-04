const GRAPHQL_SERVER_URL = 'http://localhost:5000/graphql';

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
