# import pandas as pd
# import os

# folder = "web_scraping"
# files = [f for f in os.listdir(folder) if f.endswith("_hvac_models.csv")]

# for f in files:
#     print(f"Reading {f}")
#     df = pd.read_csv(os.path.join(folder, f))
#     print(df.shape)


import pandas as pd
import os
import json

folder = "web_scraping"

# Get all CSVs in the folder
csv_files = [f for f in os.listdir(folder) if f.endswith("_hvac_models.csv")]

brands = []

for file in csv_files:
    brand_name = file.replace("_hvac_models.csv", "").replace("_", " ").title()

    df = pd.read_csv(os.path.join(folder, file))
    df = df.fillna('')

    # Group by product line
    product_lines = []
    for line_name, group in df.groupby("product_line_name"):
        models = group.to_dict("records")
        product_line_image = models[0].get("product_line_image", "")

        product_lines.append({
            "line": line_name,
            "product_line_image": product_line_image,
            "models": [
                {
                    "name": m["model_name"],
                    "model_image": m["model_image"],
                    "efficiency": m["efficiency"]
                }
                for m in models
            ]
        })

    brands.append({
        "brand": brand_name,
        "logo": f"/logos/{brand_name.replace(' ', '_')}.png",  # optional
        "productLines": product_lines
    })

# Save as a JS file you can import directly
with open("hvacData.js", "w") as f:
    f.write("const hvacData = ")
    json.dump(brands, f, indent=2)
    f.write(";\n\nexport default hvacData;")
