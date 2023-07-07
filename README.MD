# KUNSTAUSHANG IMAGE GALLERY WEBSITE
We present a full-stack image gallery website that allows the user to upload pictures, signing up with a profile picture and a search option for images in the unsplashed database by using its API.

## FEATURES
- User Sign-up with authentication and profile picture upload
- User login and logout
- Uploading and storing user pictures, which can be viewed under the tab "User pictures"
- Searching for images in the Gallery


## TECHNOLOGIES USED
- Front-end: HTML, CSS, JavaScript, React
- Back-end: Node.js, Express.js
- Database: MongoDB
- External APIs: Cloudinary, Unsplash

## INSTALLATION
1. Clone the repository
2. Go to the repository directory
3. Install the dependencies: npm inst

## USAGE
1. Signup for a new user account.
2. Log in to the website.
3. Set your profile picture by navigating to the profile settings.
Search for pictures using the provided search functionality.
4. Upload images in the profile tab.

## API DOCUMENTATION
- API used for image search (Unsplash API). Refer to their official documentation for more details on how to use the API: https://unsplash.com/documentation#search-photos
- API used for image upload (Cloudinary API). Refer to their official documentation for more details on how to use the API: https://cloudinary.com/documentation/image_upload_api_reference

## TECHNICAL CHALLENGES
- API Integration: Integrating and working with third-party APIs, such as Cloudinary and Unsplash, requires understanding their documentation, authentication mechanisms, and usage patterns
- Search Functionality: Implementing a search feature using the APIs from Unsplash may require understanding and utilizing their search endpoints, query parameters, and result pagination
- Authentication and User Management: Handling user registration, login, password hashing, session management, and secure access to protected routes
- Database Integration: Connecting your application to MongoDB Atlas involves setting up the database connection, handling CRUD operations, managing data schemas

## CONTRIBUTING
Using the description or title of uploaded image as predefined search-term in order to find similar images using the built-in image search engine.

## LIBRARIES/SDK

- [Unsplash API](https://unsplash.com/documentation): The Unsplash API is used in this project for fetching images. Please refer to the Unsplash API documentation for license information and usage terms.

- [Cloudinary SDK](https://cloudinary.com/documentation): The Cloudinary SDK is used for image uploads and management. Please refer to the Cloudinary documentation for license information and usage terms.
