# Time Tracker

### Setup Backend

The backend was built with Ruby on Rails. The database is MySQL. Here are some
tutorials on how to install Ruby and Rails in Ubuntu: [text link with title](https://gorails.com/setup/ubuntu/16.04#ruby "Ruby") and [text link with title](https://gorails.com/setup/ubuntu/16.04#rails "Rails").

```bash
cd backend
```

Install all gems

```bash
bundle install
```

Initialize environment variables for MySQL Database

```bash
export RAILS_DATABASE_USERNAME=<your mysql username>
export RAILS_DATABASE_PASSWORD=<your mysql password>
```
Create and populate MySQL Database

```bash
bin/rails db:create
bin/rails db:migrate
bin/rails db:seed
```
Start the backend server

```bash
bin/rails s
```

### Setup Frontend

```bash
# If you are following the previous steps
cd ../frontend
# If you are in the project root
cd frontend
```

Install all dependencies

```bash
npm install
```

Run webpack-dev-server

```bash
npm run start:dev
```

### Run Tests

For Backend

```bash
bundle exec rspec
```

For Frontend

```bash
npm test
```

### Time spent with application

20 hours

### What would you do differently if you had more time?

- Would have used pub/sub to provide a cleaner and self-maintained solution to
  update state in the application;
- Add a delay in the search request done to the API;
- Add proper CSS styling;
- Add more tests;

### With which parts of the application are you satisfied?

- I like the code organization (components, styles, utils, etc.).

### Which parts would need improvement?

- Frontend Server for production;
- Display error messages when Booking Time with incorrect parameters;
- Please see reply to 'What would you do differently if you had more time?' for
  more.
