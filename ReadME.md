# NASA API Pictures

A web application that fetches and displays stunning pictures from NASA's Astronomy Picture of the Day (APOD) API. Users can view, save, and manage their favorite pictures with a user-friendly interface.

---

## Features

- **Dynamic Image Loading**: Fetches 10 random pictures from NASA's APOD API on load or when "Load More" is clicked.
- **Favorites Management**: Allows users to add images to favorites or remove them.
- **Local Storage Integration**: Saves user favorites persistently using the browser's local storage.
- **Responsive Design**: Mobile-friendly interface with smooth navigation.
- **Loading Animation**: Displays a loader while fetching images.

---

## Live Demo

Deploy Link: https://nasa-apod-info.netlify.app/

---

## Installation

### Prerequisites

Ensure you have the following installed:

- A modern web browser (e.g., Chrome, Firefox).
- Internet connection to access NASA's API.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd nasa-api-pictures
   ```

3. Open `index.html` in your browser.

---

## Usage

1. Open the application in your web browser.
2. Browse through NASA's beautiful pictures.
3. Click **Add to Favorite** to save an image.
4. View your saved favorites by clicking **Favorites** in the navigation bar.
5. Remove a favorite by clicking **Remove Favorite**.
6. Load more images by clicking **Load More**.

---

## Code Overview

### HTML

- Defines the structure of the application, including navigation, container, and loader elements.
- Utilizes semantic elements for better readability.

### CSS

- Handles the styling for cards, loaders, navigation, and responsive design (stored in `style.css`).

### JavaScript

- Fetches images from NASA's APOD API using `fetch`.
- Dynamically creates image cards using DOM manipulation.
- Manages state (favorites) using Local Storage.
- Contains functions for:
  - Fetching images: `getNasaPicture()`
  - Adding favorites: `saveFavorite()`
  - Removing favorites: `removeFavorite()`
  - Updating the DOM: `updateDOM()`

---

## API Reference

- **API Endpoint**: [NASA APOD API](https://api.nasa.gov/)
- **Parameters**:
  - `api_key`: Your API key (default: `DEMO_KEY`).
  - `count`: Number of images to fetch (default: 10).

---

## Technologies Used

- **HTML5**: For structure and layout.
- **CSS3**: For styling and responsiveness.
- **JavaScript (ES6)**: For fetching data and DOM manipulation.
- **Local Storage**: For saving favorites persistently.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [NASA APOD API](https://api.nasa.gov/) for providing the amazing content.
- [Zero To Mastery](https://zerotomastery.io/) for inspiration.

---

## Future Improvements

- Add pagination for better image browsing.
- Enhance the UI with animations and additional themes.
- Implement user authentication to store favorites on a server.
- Add a search feature for specific image categories or dates.
