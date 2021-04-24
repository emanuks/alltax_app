import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Header } from './components/Header';

import './assets/styles/app.css';
import './assets/styles/global.css';

function App() {
  const data = [
    {
      category: "Food",
      product: "Cereals",
      brand: "Cereal1",
      sales: [704, 275, 415, 618]
    },
    {
      category: "Food",
      product: "Cereals",
      brand: "Cereal2",
      sales: [63, 591, 477, 48]
    },
    {
      category: "Food",
      product: "IceCreams",
      brand: "Chocolate",
      sales: [759, 270, 291, 550]
    },
    {
      category: "Food",
      product: "IceCreams",
      brand: "Strawberry",
      sales: [948, 933, 640, 556]
    },
    {
      category: "Clothing",
      product: "Shirts",
      brand: "Shirt1",
      sales: [236, 815, 215, 524]
    },
    {
      category: "Clothing",
      product: "Shirts",
      brand: "Shirt2",
      sales: [376, 578, 983, 439]
    },
    {
      category: "Clothing",
      product: "Skirts",
      brand: "Skirt1",
      sales: [863, 317, 933, 549]
    },
    {
      category: "Clothing",
      product: "Skirts",
      brand: "Skirt2",
      sales: [480, 670, 511, 380]
    },
  ]

  const [selected, setSelected] = useState(data[0]);

  const categories = [...new Set(data.map(item => item.category))];

  const products = [];
  const map = new Map();
  for (const item of data) {
    if (!map.has(item.product) && (item.category === selected.category)) {
      map.set(item.product, true);    // set any value to Map
      products.push({
        product: item.product,
        category: item.category
      });
    }
  }

  const brands = [];
  for (const item of data) {
    if (!map.has(item.brand) && (item.product === selected.product)) {
      map.set(item.brand, true);    // set any value to Map
      brands.push({
        brand: item.brand,
        category: item.category
      });
    }
  }

  const handleCategoryChange = (e) => {
    setSelected(data.find(item => item.category === e.target.value));
  }

  const handleProductChange = (e) => {
    setSelected(data.find(item => item.product === e.target.value));
  }

  const handleBrandChange = (e) => {
    setSelected(data.find(item => item.brand === e.target.value));
  }

  const options = {
    chart: {
      height: 550
    },

    title: {
      text: 'Sales By Month - 2021'
    },

    yAxis: {
      title: {
        text: 'Sales'
      },
      min: 0
    },

    xAxis: {
      title: {
        text: 'Months'
      },
      categories: ['January', 'February', 'March', 'April']
    },

    series: [{
      name: 'Sales',
      data: selected.sales
    }]
  }

  return (
    <>
      <Header />

      <div className="form">
        <label>
          Category
          <select value={selected.category} onChange={handleCategoryChange}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))
            }
          </select>
        </label>

        <label>
          Product
          <select value={selected.product} onChange={handleProductChange}>
            {products.map(item => (
              <option key={item.product} value={item.product}>{item.product}</option>
            ))
            }
          </select>
        </label>

        <label>
          Brand
          <select value={selected.brand} onChange={handleBrandChange}>
            {brands.map(item => (
              <option key={item.brand} value={item.brand}>{item.brand}</option>
            ))
            }
          </select>
        </label>
      </div>

      <div className="chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </>
  );
}

export default App;
