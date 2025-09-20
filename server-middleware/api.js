const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

// Sample user data
const normalUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com'
  },
  {
    id: 4,
    name: 'Alice Williams',
    email: 'alice.williams@example.com'
  },
  {
    id: 5,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com'
  }
]

const slowUsers = [
  {
    id: 1,
    name: 'Slow User 1',
    email: 'slow1@example.com'
  },
  {
    id: 2,
    name: 'Slow User 2',
    email: 'slow2@example.com'
  },
  {
    id: 3,
    name: 'Slow User 3',
    email: 'slow3@example.com'
  }
]

const timeoutUsers = [
  {
    id: 1,
    name: 'Timeout User 1',
    email: 'timeout1@example.com'
  },
  {
    id: 2,
    name: 'Timeout User 2',
    email: 'timeout2@example.com'
  }
]

// Normal endpoint - returns user data immediately
app.get('/users', (req, res) => {
  res.json({ 
    users: normalUsers,
    timestamp: new Date().toISOString(),
    endpoint: 'normal'
  })
})

// Slow endpoint - returns user data after 3 second delay
app.get('/users/slow', (req, res) => {
  setTimeout(() => {
    res.json({ 
      users: slowUsers,
      timestamp: new Date().toISOString(),
      endpoint: 'slow',
      delay: '3 seconds'
    })
  }, 3000) // 3 second delay
})

// Error endpoint - returns 500 server error
app.get('/users/error', (req, res) => {
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: 'Something went wrong on the server',
    timestamp: new Date().toISOString(),
    endpoint: 'error'
  })
})

// Not found endpoint - returns 404 not found error
app.get('/users/notfound', (req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: 'The requested resource could not be found',
    timestamp: new Date().toISOString(),
    endpoint: 'notfound'
  })
})

// Timeout endpoint - returns data after 5 second delay (simulates timeout scenario)
app.get('/users/timeout', (req, res) => {
  setTimeout(() => {
    res.json({ 
      users: timeoutUsers,
      timestamp: new Date().toISOString(),
      endpoint: 'timeout',
      delay: '5 seconds'
    })
  }, 5000) // 5 second delay
})

module.exports = app
