/ 
    -src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    -tests/ [later]

## project setup
    -clone the project
    - execute `npm install` on the same path as of your root directory of the downloded project
    - create a `.env` file in the root directory and add the following environment variable
        - `PORT=3000` 
    -inside the 'src/config' folder create a new file `config.json` and then add the following piece of json

    ```
    "development": {
        "username": "your_db_login_name",
        "password": "yourPassword",
        "database": "Flights_Search_DB_Dev",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    ```
    once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
    and then execute 
    `npx sequelize db:migrate`

    ## DB Design
        - Airplane Table
            -id
            -model_number
            -capacity
        - Flight
            -id
            -departure_city_id
            -destination_city_id
            -airplane_id
            -departure
            -arrival
            -Flight number
            -airport_id
        - Airport
            -id
            -name
            -city_id
            -adress
        - City
            -id
            -name

    ## Tables

    ### City -> id,name,created_at,updated_at
    ### Airport -> id,name,adress,city_id,created_at,updated_at
        Relationship-> city has many airports and airport belongs to a city (one to many)