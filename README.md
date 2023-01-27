# Milk Store App | Front end | Typescript

### Demo of this app:
![demo](https://github.com/SanctussBa/MilkStoreReact/blob/master/app-demo.gif?raw=true)


## What is this project about?

* This is Front-End part of full stack application.
* Back end part you can find in this repository --> https://github.com/SanctussBa/MilkStoreAPI
* Application imitates Vegan Milk Web store. 
* This serves as React, TypeScript, Full-stack learning project. 

## What technologies were used?

* `React` with `TypeScript`
* Routing: `react-router-dom`
* Styling: `CSS`
* Hooks: `useContext`, `useLocation`, `useState`, `useEffect`, `useNavigate`, `useLocalStorage`(custom)
* `React icons`

## Main features of this app:

* On the first page load all products are fetched from back-end API
* User can simulate purchase for Vegan Milk, add selected products into the cart and "Order".
* On "Buy" click database storage in the back-end is depleted according to the order details.
* User can perform data filtering and searching.

## What can be further improved?

* Optimization of mobile responisive design. 
* Adding Pagination
* Implementing pricing system
* Implementation of images according to Milk type
* Website deployment

## How you can clone and run this project?

From your command line, first clone this repo:

```
# Clone this repo
>>> git clone git@github.com:SanctussBa/MilkStoreReact.git

# Go into the repository
>>> cd .\MilkStoreReact\

# Remove current origin repository
>>> git remote remove origin

```
```diff
- Before running this app, you need to set up Back-End -
```


### Back end part you can find in this repository --> https://github.com/SanctussBa/MilkStoreAPI

After back end is set up:

1. Open `/milkstore/` directory with your IDE, open new terminal in your IDE.
2. Install all packages and dependancies
```
>>> npm i
```
3. Start application
```
>>> npm start
```

App should be running by its own. If it is not running Open http://localhost:3000 to view it in the browser.
