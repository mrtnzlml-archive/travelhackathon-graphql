const fetch = require('node-fetch');
const config = require('./_config');

// see: https://travelhackathon-graphiql.now.sh/
const loginQuery = `
mutation ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    identity {
      emailVerified
      firstName
      lastName
      fullName
    }
  }
}
`;

const query = `
{
  allBookings(first: 2) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        legs {
          flightNumber
          recheckRequired
          duration
          departure {
            airport {
              city {
                name
              }
              code
            }
          }
          arrival {
            airport {
              city {
                name
              }
              code
            }
          }
          airline {
            name
            code
            logoUrl
            isLowCost
          }
        }
      }
    }
  }
}
`;

fetch(config.API, {
  method: 'POST',
  body: JSON.stringify({
    query: loginQuery,
    variables: {
      email: config.email,
      password: config.password,
    },
  }),
})
  .then(result => result.json())
  .then(json => {
    if (json.errors) {
      console.error(JSON.stringify(json.errors, null, 2));
      process.exit();
    }
    return fetch(config.API, {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        authorization: json.data.login.token
      }
    });
  })
    .then(result => result.json())
    .then(json => console.log(JSON.stringify(json, null, 2)));
