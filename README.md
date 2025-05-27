# HVAC Product Catalog Interface

## 📦 Data Sources & Structure

All HVAC data in this project was collected by scraping official manufacturer websites to ensure accuracy and freshness.

✅ Source Websites

Data was gathered from the following brand websites:

Carrier
Trane
Lennox
Rheem
Goodman
Daikin
York
Amana
American Standard
Bryant

✅ Data Structure

Each brand's data was normalized into a consistent tabular format with the following columns:

<pre>  product_line_name, product_line_image, model_name, model_image, efficiency </pre>

✅ Processing

CSVs were grouped by product_line_name and models using pandas.
Missing fields (NaN) were cleaned and replaced with blank strings.
Final output was converted into a unified JSON file (hvacData.js) structured by:
brand → productLines → models
This makes the data easy to use and render in the frontend application.