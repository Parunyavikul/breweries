# Breweries
Build a single page application using React to display a list of breweries with the ability to 
click on an item from the list to view more details on that brewery

## Minimum Requirements

### Build a component displaying a list of breweries
__Display the following information for each brewery__
- [ ] Name
- [ ] Type
- [ ] Address (Street, City, State, Zip)
- [ ] Website URL (clickable)

- [ ] Pull directly from API and not static data

### Build a component that displays the details of a brewery
- [ ] Name
- [ ] Address (Street, City, State, Zip)
- [ ] Map indicating the location latitude and longitude. (Use Google Map React)



## Tech Stack
- React.js
- Chakra UI (Bootstrap)
- Express? 

## API
https://www.openbrewerydb.org/documentation/02-getbrewery


```js
// SAMPLE 
{
  id: "madtree-brewing-cincinnati",
  name: "MadTree Brewing",
  brewery_type: "regional",
  street: "3301 Madison Rd",
  address_2: null,
  address_3: null,
  city: "Cincinnati",
  state: "Ohio",
  county_province: null,
  postal_code: "45209-1132",
  country: "United States",
  longitude: "-84.4239715",
  latitude: "39.1563725",
  phone: "5138368733",
  website_url: "http://www.madtreebrewing.com",
  updated_at: "2021-10-23T02:24:55.243Z",
  created_at: "2021-10-23T02:24:55.243Z"
}
```

