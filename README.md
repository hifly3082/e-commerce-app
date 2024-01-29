# E-commerce app

### Requirements

- The users should be able to navigate the categories and products
- The users should be able to search products by name, category, or price range*
- The users should be able to add products to the cart, remove them, or change the quantity
- The users should be able to add products to the favorites list
- The users should get notifications on taking actions

API: [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/)

### Tech Stack

- React 18.2
- Redux 9.1 / RTK 2.0
- React Router 6.21
- TypeScript 4.9.5
- Node package manager 9.3
- styled-components 6.1
- react-hot-toast 2.4

### Features

- Product listings for displaying products with detailed information
- Dynamic search and filters for providing efficient data updates
- Real-time notifications for handling cart and favorites list
- Seamless UX with Redux state management
- Dark mode for better UI accessibility

### Restrictions 
*Back-end implementation of price_min and price_max allows to set only both values to filter products.
If one of these values is empty or 0, it will be treated as empty and won't work. 
Therefore, to filter products by price range, you should set both values to positive numbers > 0.

### Installation and setup

1. Make sure you have Node.js and npm installed.
2. Clone the project repository and navigate to the project's root directory:

```bash
git clone https://github.com/hifly3082/e-commerce-app.git
cd to-do-app
```

3. Install the dependencies using the following command:

```bash
npm install
```

### Usage

To run the application, use the following command:

```bash
npm start
```
