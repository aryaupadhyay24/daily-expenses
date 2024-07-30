
# Daily Expenses App

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd daily-expenses-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
    - Create a MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
    - Get the connection string and replace `your_mongodb_connection_string` in `app.js`

4. Start the application:
    ```bash
    npm start
    ```

## API Endpoints

### User Endpoints
- **Create user**: `POST /api/users`
- **Retrieve user details**: `GET /api/users/:id`

### Expense Endpoints
- **Add expense**: `POST /api/expenses`
- **Retrieve individual user expenses**: `GET /api/expenses/user/:id`
- **Retrieve overall expenses**: `GET /api/expenses/overall`
- **Download balance sheet**: `GET /api/expenses/download`

## Bonus Points

- User authentication using JWT
- Error handling and input validation
- Performance optimization
- Unit and integration tests
