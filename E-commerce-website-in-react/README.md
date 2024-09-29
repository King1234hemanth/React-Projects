# E-Commerce Website README
*This README provides an overview of the e-commerce website built using React, emphasizing the utilization of React Router DOM for navigation and understanding its concepts.*

> ### Website Overview
This e-commerce website serves as a practical project for mastering React Router DOM, a critical tool for developing single-page applications with React. The primary objective of this project was to solidify understanding of React Router DOM concepts while learning React JS. The website comprises three main pages: Home, Items, and Contact Us, navigable using React Router DOM. A navigation bar component is implemented, offering quick access to these pages. Additionally, the site incorporates protected routes to address privacy concerns.

> ### Live Link: https://ecommercesite-reactrouter.netlify.app/

> ### Pages:
1) **Home:** The landing page provides an introduction and overview of the e-commerce platform.
2) **Items:** Displays various products available for purchase. Clicking on individual items redirects the user to their respective details pages.
3) **Contact Us:** Users can find contact information and reach out for inquiries or support.
4) **Error Page:** An error page is provided in case of errors. Users can easily navigate back to the home page from here with the help of a single button.

> ### React Router DOM Integration
*React Router DOM is extensively employed to manage navigation within the website, facilitating smooth transitions between different pages while maintaining a single-page application structure.*

> ### Navigation:
1) **Navbar Component:** The navigation bar component contains links to all pages, enabling users to navigate between Home, Items, and Contact Us effortlessly.
![Screenshot (76)](https://github.com/Shra2703/E-commerce-website-in-react/assets/113618935/2e097bc7-527c-4f50-8722-80fbefd79651)

2) **Nested Routes and Hooks:**
      1) ***Nested Routes:*** The Item page utilizes nested routes to display further product details on separate pages. This implementation leverages React Router DOM's nested routing capability.
      2) ***useParams Hook:*** In nested routes, the useParams hook is employed to access parameters from the URL, allowing dynamic rendering of item details based on the selected item.

3) **Protected Routes:**
      1) ***Privacy Concerns:*** Protected routes are implemented to restrict unauthorized access and enhance privacy. Users may need to log in or provide credentials to access certain pages, ensuring sensitive information remains secure.

4) **Error Handling:**
      1) ***Error Page and useNavigate Hook:*** In the event of errors, an error page is displayed. The usenavigate hook is utilized to facilitate easy redirection back to the home page with just a single button click.

> ### Video Demo:

https://github.com/Shra2703/E-commerce-website-in-react/assets/113618935/7cafaf80-112c-4d6a-9e9f-80210dfa11bd


> ### Conclusion:
This project has served as an invaluable learning experience for mastering React Router DOM concepts while building a functional e-commerce website. Implementing navigation, nested routes, hooks, and error-handling mechanisms has deepened my understanding of React and strengthened my ability to develop dynamic web applications effectively.

***Happy Learning!***
