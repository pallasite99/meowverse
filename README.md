# meowverse
# Cat Website

## Description
This project is a simple website that fetches and displays cat images and breed information using [TheCatAPI](https://thecatapi.com/). It consists of two main pages:
- **Random Cats Page (`index.html`)**: Displays random cat images.
- **Cat Breeds Page (`breeds.html`)**: Displays a table of cat breeds with descriptions.

## Features
- Fetches **random cat images** from TheCatAPI.
- Displays **cat breed names and descriptions** in a structured table.
- Includes **navigation between pages** for easy browsing.
- Styled using **CSS** for a clean and responsive layout.

## Technologies Used
- **HTML**: Structure of the website.
- **CSS**: Styling and layout.
- **JavaScript (Fetch API)**: Fetches data from TheCatAPI.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/pallasite99/meowverse.git
   ```
2. Navigate to the project folder:
   ```bash
   cd cat-api-website
   ```
3. Open `index.html` in your browser to view random cat images.
4. Open `breeds.html` to see cat breeds displayed in a table.

## File Structure
```
cat-api-website/
│── index.html        # Random cat images page
│── breeds.html       # Cat breeds information page
│── styles.css        # Styling for the website
│── script.js         # JavaScript file for API fetching
│── README.md         # Project documentation
```

## API Usage
- **Fetch random cat images:**
  ```js
  fetch("https://api.thecatapi.com/v1/images/search?limit=5")
  ```
- **Fetch cat breeds data:**
  ```js
  fetch("https://api.thecatapi.com/v1/breeds")
  ```

## Contributing
Feel free to submit pull requests or open issues to improve this project!

## License
This project is licensed under the MIT License.


