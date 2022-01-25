# 1. How to config database MySql
* create a database named: adsfox_db
<img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/createDataBase.png">
* set DB_USERNAME and DB_PASSWORD in .env for access to your database
<img width="300" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/config.png">


# 2. How to migrate
* open a new terminal window
* paste the presented fragment: php artisan migrate
<img width="600" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/migrate.png">


# 3. How to add 3 elements to database
* open a new terminal window
* paste the presented fragment: php artisan db:seed --class=CanalSeeder
<img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/seeders.png">

# 4. How to run server
* open a new terminal window
* paste the presented fragment: php artisan serve 
<img width="300" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/serve.png">

# 5. Api info
* List of canals:
  * GET http://127.0.0.1:8000/canals\
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/getAll.png">
* A single canal:
  * GET http://127.0.0.1:8000/canals/1\
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/getId.png">
* Create new canal:
  * POST http://127.0.0.1:8000/canals\
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/createCorrect.png">
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/createError.png">
* Delete post by id:
  * DELETE http://127.0.0.1:8000/canals/1\
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/deleteCorrect.png">
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/deleteError.png">
* Update canal:
  * PUT http://127.0.0.1:8000/canals/1\
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/updateCorrect.png">
* List info about percent all canals
  * GET http://127.0.0.1:8000/canals/percentages\
    <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/percentages.png">


# 6. Run Unit Tests
* open a new terminal window
* paste the presented fragment: ./vendor/bin/phpunit\
  <img width="400" alt="jarray reverse exampl" src="https://github.com/Eryk1997/Adsfox/blob/main/adsfox_backend/images/unitTest.png">

