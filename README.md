# HVAC Product Catalog Interface

## 📦 Data Sources & Structure

All HVAC data in this project was collected by scraping official manufacturer websites to ensure accuracy and freshness.

✅ Source Websites

Data was gathered from the following brand websites:

Carrier: "https://www.carrier.com/residential/en/us/products/heating-cooling/"

Trane: "https://www.trane.com/residential/en/products/"

Lennox: "https://www.lennox.com/residential/products/heating-cooling"

Rheem: "https://www.rheem.com/products/residential/heating-and-cooling/"

Goodman: "https://www.goodmanmfg.com/products/residential-products#HeatingandCooling"

Daikin:"https://daikincomfort.com/products/heating-cooling/whole-home-systems"

York: "https://www.york.com"

Amana: "https://www.amana-hac.com/products"

American Standard: "https://www.americanstandardair.com/products/#heating-cooling"

Bryant: "https://www.bryant.com/en/us/products/"

✅ Data Structure

Each brand's data was normalized into a consistent tabular format with the following columns:

```bash 
product_line_name, product_line_image, model_name, model_image, efficiency
```

✅ Processing

CSVs were grouped by product_line_name and models using pandas.
Missing fields (NaN) were cleaned and replaced with blank strings.
Final output was converted into a unified JSON file (hvacData.js) structured by:
brand → productLines → models
This makes the data easy to use and render in the frontend application.


## ⚙️ Setup Instructions
Follow the steps below to set up and run the HVAC catalog application locally.

✅ Prerequisites

Make sure you have the following installed:

- Node.js (v14+ recommended)
- Python 3.7+
- pip for installing Python packages
- npm (comes with Node.js)

1. Clone the Repository

```bash 
git clone https://github.com/your-username/hvac-catalog.git 
cd hvac-catalog
```

2.  Install Frontend Dependencies

```bash 
npm install
```

4. Run the App

```bash 
npm start 
```
