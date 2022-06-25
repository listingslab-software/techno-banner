# Techno Banner

Builds on [https://github.com/listingslab-software/ts-toplist](ts-toplist) to creates an easily embedadble React Component that is smarter than your average banner

## Features

- TypeScript
- SVG
- Flash

### Banner app

- Easily embeds anywhere

### Admin app

- Requires an admin interface to cover CRUD functionalities for the same endpoint to manage the Casino Toplist that is being populated in the React Component.
Optional Features
- Once something is deleted show a undo popup to bring back item
- Paginate the toplist items when showing them in Admin Interface
- Implement tracking of clicks on the top list items by saving the details to
this endpoint & showing the statistics in the Admin Interface

https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/clicks

```javascript
const body = {
    toplistItemId: "5",
    clickedAt:"2022-01-06T21:48:19.799Z"  
}
```
- Show a graph of how many clicks generated on all items
