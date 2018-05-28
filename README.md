# Time Tracker

### Setup Backend

```bash
cd backend
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
