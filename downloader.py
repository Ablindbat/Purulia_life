import os
import requests
import json

# Load your resources.json
with open("resources.json", "r") as f:
    data = json.load(f)

# Create images folder if not exists
os.makedirs("images", exist_ok=True)

for item in data:
    url = item["url"]
    name = item["name"].replace(" ", "_").lower() + ".jpg"

    if url.startswith("http"):
        print("Downloading:", name)
        img_data = requests.get(url).content
        with open(f"images/{name}", "wb") as img_file:
            img_file.write(img_data)
    else:
        print("Skipping:", name)
