const fetch = require('node-fetch');
const config = require('./_config');

// see: https://travelhackathon-graphiql.now.sh/
const query = `query AllFlights($search: FlightsSearchInput!) {
  allFlights(search: $search, first: 1) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        price {
          amount
          currency
        }
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
}`;

const variables = {
  search: {
    from: 'PRG',
    to: 'Brno',
    dateFrom: '2017-12-24',
    dateTo: '2017-12-30'
  }
};

fetch(config.API, {
  method: 'POST',
  body: JSON.stringify({ query, variables }),
})
  .then(result => result.json())
  .then(json => console.log(JSON.stringify(json, null, 2)));
