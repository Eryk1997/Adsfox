# 1. How to config database MySql
* create a database named: adsfox_db
* set DB_USERNAME and DB_PASSWORD in .env for access to your database

# 2. How to migrate
* open a new terminal window
* paste the presented fragment: php artisan migrate

# 3. How to add 3 elements to database
* open a new terminal window
* paste the presented fragment: php artisan db:seed --class=CanalSeeder

# 4. How to run server
* open a new terminal window
* paste the presented fragment: php artisan serve

# 5. Api info
* List of canals:
  * GET http://127.0.0.1:8000/canals
* A single canal:
  * GET http://127.0.0.1:8000/canals/1
* Create new canal:
  * POST http://127.0.0.1:8000/canals
* Delete post by id:
  * DELETE http://127.0.0.1:8000/canals/1
* Update canal:
  * PUT http://127.0.0.1:8000/canals/1
* List info about percent all canals
  * GET http://127.0.0.1:8000/canals/percentages

# 6. Run Unit Tests
* open a new terminal window
* paste the presented fragment: ./vendor/bin/phpunit
