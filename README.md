# Kiwi.com GraphQL examples

Just `git clone` and it's ready to go! (Node.js required)

## Find Prague

```
node allLocations.js
```

```
{
  "data": {
    "allLocations": {
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": false,
        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="
      },
      "edges": [
        {
          "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
          "node": {
            "locationId": "PRG",
            "name": "Václav Havel Airport Prague",
            "slug": "vaclav-havel-airport-prague-prague-czech-republic",
            "timezone": "Europe/Prague",
            "location": {
              "lat": 50.1008333,
              "lng": 14.26
            },
            "type": "airport"
          }
        },
        {
          "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
          "node": {
            "locationId": "prague_cz",
            "name": "Prague",
            "slug": "prague-czech-republic",
            "timezone": "Europe/Prague",
            "location": {
              "lat": 50.0755381,
              "lng": 14.4378005
            },
            "type": "city"
          }
        }
      ]
    }
  }
}
```

## Find best flight from Prague to the Brno

```
node allFlights.js
```

```
{
  "data": {
    "allFlights": {
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": false,
        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
        "endCursor": "YXJyYXljb25uZWN0aW9uOjA="
      },
      "edges": [
        {
          "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
          "node": {
            "price": {
              "amount": 50,
              "currency": "EUR"
            },
            "legs": [
              {
                "flightNumber": 3064,
                "recheckRequired": false,
                "duration": 120,
                "departure": {
                  "airport": {
                    "city": {
                      "name": "Prague"
                    },
                    "locationId": "PRG"
                  }
                },
                "arrival": {
                  "airport": {
                    "city": {
                      "name": "London"
                    },
                    "locationId": "STN"
                  }
                },
                "airline": {
                  "name": "easyJet",
                  "code": "U2",
                  "logoUrl": "https://images.kiwi.com/airlines/64/U2.png",
                  "isLowCost": true
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

## Fetch bookings (this endpoint needs authorization)

```
node allBookings.js
```

```
{
  "data": {
    "allBookings": {
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": false,
        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="
      },
      "edges": [
        {
          "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
          "node": {
            "legs": [
              {
                "flightNumber": 5032,
                "recheckRequired": false,
                "duration": 60,
                "departure": {
                  "airport": {
                    "city": {
                      "name": "Wrocław"
                    },
                    "locationId": "WRO"
                  }
                },
                "arrival": {
                  "airport": {
                    "city": {
                      "name": "Warsaw"
                    },
                    "locationId": "WAW"
                  }
                },
                "airline": {
                  "name": "Ryanair",
                  "code": "FR",
                  "logoUrl": "https://images.kiwi.com/airlines/64/FR.png",
                  "isLowCost": true
                }
              }
            ]
          }
        },
        {
          "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
          "node": {
            "legs": [
              {
                "flightNumber": 5032,
                "recheckRequired": false,
                "duration": 60,
                "departure": {
                  "airport": {
                    "city": {
                      "name": "Wrocław"
                    },
                    "locationId": "WRO"
                  }
                },
                "arrival": {
                  "airport": {
                    "city": {
                      "name": "Warsaw"
                    },
                    "locationId": "WAW"
                  }
                },
                "airline": {
                  "name": "Ryanair",
                  "code": "FR",
                  "logoUrl": "https://images.kiwi.com/airlines/64/FR.png",
                  "isLowCost": true
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```
