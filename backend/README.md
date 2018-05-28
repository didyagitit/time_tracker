# Backend

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

### Run tests

```bash
bundle exec rspec
```
