const fetch = require('node-fetch');
const config = require('./_config');

// see: https://travelhackathon-graphiql.now.sh/
const query = `
fragment RouteStop on RouteStop {
  airport {
    city {
      name
    }
    locationId
  }
}

query AllFlights($search: FlightsSearchInput!) {
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
            ...RouteStop
          }
          arrival {
            ...RouteStop
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

const variables = {
  search: {
    from: {
      radius: { // Prague
        lat: 50.08,
        lng: 14.44,
        radius: 100
      }
    },
    to: [
      { location: 'Brno' },
      { location: 'London' }
    ],
    dateFrom: '2017-12-24',
    dateTo: '2017-12-30',
  },
};

fetch(config.API, {
  method: 'POST',
  body: JSON.stringify({ query, variables }),
})
  .then(result => result.json())
  .then(json => console.log(JSON.stringify(json, null, 2)));
