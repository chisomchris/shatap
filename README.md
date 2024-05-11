# SHAT APP

## Overview

this application will be used for real time communication using the `WebRTC` api and  `Web sockets`

this project is intended for learning purposes only

## Starting API Server

```bash
cd backend
npm install
npm run dev
```


## Starting Web Server

First, run the development server:

```bash
cd client
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Conventions

the following conventions must be followed for consistency

- all files and folders must be lowercased using kebab-case naming convention

  e.g `home.tsx`, `home-action.tx`

- all componets must be named using the PascalCase naming convention

   e.g 
   ```javascript
    const Page = () => {
        return <div>...</div>
    }
    ``` 
    ```javascript
    function Page () {
        return <div>...</div>
    }
    ``` 
- all variables must be named using the snake_case naming convention

    e.g
    ```javascript
    const my_num = 123
    const my_str = "123"
    const my_obj = {}
    ```

- all constants must be named using the snake_case naming convention with UPPERCASING

    e.g
    ```javascript
    const PORT = 8080
    const MY_PORT = 4501
    const MY_API_KEY = "my api key"
    ```