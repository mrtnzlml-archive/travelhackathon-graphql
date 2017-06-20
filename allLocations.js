const fetch = require('node-fetch');
const config = require('./_config');

// see: https://travelhackathon-graphiql.now.sh/
const query = `{
  allLocations(search: "PRG", first:2) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        locationId
        name
        slug
        timezone
        location {
          latitude
          longitude
        }
        type
      }
    }
  }
}`;

fetch(config.API, {
  method: 'POST',
  body: JSON.stringify({ query }),
})
  .then(result => result.json())
  .then(json => console.log(JSON.stringify(json, null, 2)));
