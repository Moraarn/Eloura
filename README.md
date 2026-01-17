# Eloura Project

## Overview
Eloura is a web application designed to provide users with a seamless experience for managing products and user authentication. The project consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js.

## Project Structure

### Frontend (Eloura)
- **css/**: Contains stylesheets for the application.
  - `auth.css`: Styles for authentication pages.
  - `index.css`: General styles for the homepage.
  - `product.css`: Styles specific to product pages.
  - `styles.css`: Additional styles for the application.

- **html/**: Contains HTML files for the application.
  - `index.html`: Homepage of the application.
  - `login.html`: Login page for user authentication.
  - `product.html`: Page displaying product details.
  - `signup.html`: Signup page for new users.

- **js/**: Contains JavaScript files for the application.
  - `product.js`: JavaScript for product-related functionalities.
  - `script.js`: General JavaScript functionalities.

### Backend (Eloura-backend)
- **package.json**: Contains metadata about the project and its dependencies.
- **server.js**: Main server file to run the application.
- **user/**: Contains user-related functionalities.
  - `controller.js`: Handles user requests and responses.
  - `model.js`: Defines the user model and database interactions.
  - `routes.js`: Defines the routes for user-related endpoints.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd Eloura-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## Usage
- Access the frontend by opening `html/index.html` in your web browser.
- Use the backend API for user authentication and product management.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to all contributors and libraries used in this project.