# Time Tracker

### Setup Backend

The backend was built with Ruby on Rails. The database is MySQL. Here are some
tutorials on how to install Ruby and Rails in Ubuntu: [Ruby](https://gorails.com/setup/ubuntu/16.04#ruby "Ruby") and [Rails](https://gorails.com/setup/ubuntu/16.04#rails "Rails").

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
