# Compliment Generator API

The Compliment Generator API is a simple web service that provides users with personalized compliments in various themes. Users can request compliments to receive positive and uplifting messages tailored to their preferences.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)


## Installation

1. Clone the repository or download the source code:

   ```bash
   git clone https://github.com/Sriram1403/compliment-generator-API.git
   cd compliment-generator-api

2. Install the required dependencies using npm:
    ```bash
     npm install
4. Start the server:
   ```bash
     node app.js

## Usage

Access the API using your preferred tool (e.g., Rest, Postman) or a browser.

Use the provided endpoints to generate personalized compliments based on different themes and languages.

## Endpoints

Generate a Compliment
Generates a personalized compliment with the specified theme and language.

URL: /compliment

Method: GET

Query Parameters:

      theme (optional): Choose from empowerment, creativity, positivity. Default: positivity.
      name (optional): User's name. Default: Friend.
      
Examples:

-Generate a compliment with the default settings:

  http://localhost:3000/compliment

-Generate a compliment with the theme of empowerment:

  http://localhost:3000/compliment?theme=empowerment
  
-Generate a personalized compliment for Sriram:

   http://localhost:3000/compliment?name=Sriram
   
   http://localhost:3000/compliment?name=Sriram&theme=empowerment

## Contributing

Contributions to this project are welcome! If you find a bug or have a feature suggestion, feel free to open an issue or submit a pull request.

-Fork the repository.

-Create a new branch for your feature or bug fix.

-Commit your changes and push the branch.

-Open a pull request against the main branch of this repository.


