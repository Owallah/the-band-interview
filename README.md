# [Owallah" Shop](https://the-band-interview.vercel.app/)

## 1. Project Overview
This project is a product page built using React, React Query, and TypeScript. It fetches product details from the [Fake Store Api](https://fakestoreapi.com/products), displays them, and allows users to rate and review products. The project implements:

- An interactive cart icon with an item counter.
- Featured product highlights and offers.
- Fetching product data using React Query.
- Product searching, filtering/sorting.
- A star rating system for users to rate products.
- A review submission form with real-time updates.
- Admin authentication use:`admin@admin.com` as email and `password` as password
- Error handling
- Form validation
- Auth state management with Zustand
- Admin dashboard with analytics.
- Admin product management. Applies the `CRUD` operations

The project utilizes:
- ├──`React Query` and `Axios` for data fetching and availability.
- ├──`Zustand` for global context.
- ├── `rechart` for analytics and data visualization.

## 2. Setup Instructions
To set up this project on your local machine, follow these steps:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- npm or yarn package manager

### Cloning the Repository
```sh
git clone https://github.com/Owallah/the-band-interview.git
cd product-page
``` 

## 3. Dependency Installation Steps
Install required dependencies:
```sh
npm install
# or
yarn install
```

## 4. Running Instructions
To start the development server:
```sh
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000/`.

## 5. Project Structure Documentation
```plaintext
product-page/
│── src/
│   ├── assets/            # Static assets like images
│   ├── components/        # Reusable UI components
│   ├──context/             # global contexts with Zustand
│   ├── pages/             # Page components
│   │   ├── LandingPage.tsx  # Main product page
│   ├── utils/             # Utility functions
│   │   ├── api/Api.ts     # API request functions
|   |   ├── data/MockChartsData.tsx # Mock data for admin data analytics
│   ├── App.tsx            # Main application file
│   ├── main.tsx           # Entry point
│── public/                # Public assets
│── package.json           # Dependencies & scripts
│── tsconfig.json          # TypeScript configuration
│── README.md              # Documentation
```

## API Usage
The product data is fetched from the [Fake Store Api](https://fakestoreapi.com/products) endpoint:
```ts
const BASE_URL = "https://fakestoreapi.com/products";

// fetch all the products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        useProductStore.getState().setProducts(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
};
```

## License
This project is licensed under the MIT License.

