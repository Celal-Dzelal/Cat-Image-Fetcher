# Cat Image Fetcher

- Welcome to the **Cat Image Fetcher** repository! This project is a simple web application that fetches random cat images from an API and displays them on the screen. The app shows a loading screen initially and allows the user to refresh the images by clicking a button.

## Demo

![Project Demo](./image/demo.gif)

## Features

- **Loading Screen**: A loading screen is displayed while fetching cat images.
- **Dynamic Image Fetching**: Fetches random cat images from TheCatAPI.
- **Responsive Layout**: The app adapts to different screen sizes for a smooth user experience.
- **Date Display**: The current date and time are displayed at the top of the screen.
- **Error Handling**: Displays an error image if the API request fails.

## Technologies Used

- **HTML**: Semantic structure for the page layout.
- **CSS**: Styling with responsive design using flexbox and media queries.
- **JavaScript**: Logic for fetching cat images from an API and handling user interactions.
- **TheCatAPI**: Used to fetch random cat images.

## Folder Structure

cat-image-fetcher/
|-- img/ # Image assets for the project | |-- loading.gif # Loading image | |-- error.gif # Error image
|-- index.html # Main HTML file
|-- style.css # Styling for the application
|-- script.js # JavaScript logic
|-- README.md # Project documentation

## App Sections

### Loading Screen

- Displays a loading animation while fetching images from the API.

### Date Display

- Shows the current date and time at the top of the screen, updating every second.

### Button for New Images

- A button that allows the user to fetch new cat images when clicked.

### Image Display

- Cat images are displayed in a flexible, responsive layout. If the fetch operation fails, an error image is shown.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cat-image-fetcher.git
   ```
2. Navigate to the project directory:

cd cat-image-fetcher

3. Open index.html in your browser to view the project.

## Customization

- Modify the JavaScript in script.js to change the API or image handling logic.
- Edit the style.css file to customize the layout and styling.
- Add your own images in the imgage/ folder.

## Credits

- TheCatAPI: https://thecatapi.com

## License

- This project is open-source and available under the MIT License.
