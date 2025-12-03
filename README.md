# React Node API

Full-stack boilerplate with React frontend and Node.js/Express backend.

## Features

- **React 18** - Modern React with hooks and functional components
- **Node.js + Express** - Fast and minimalist web framework
- **Webpack 5** - Module bundler with hot reloading support
- **Babel** - JavaScript compiler for modern syntax
- **MongoDB ready** - MongoDB driver included for database integration
- **RESTful API** - Example CRUD endpoints included
- **CORS enabled** - Cross-origin resource sharing configured
- **Responsive design** - Mobile-friendly CSS included

## Project Structure

```
react-node-api/
├── api/
│   └── index.js        # API routes (Express router)
├── public/
│   ├── index.html      # HTML template
│   └── bundle.js       # Compiled frontend (generated)
├── src/
│   ├── index.js        # React entry point
│   ├── App.jsx         # Main React component
│   └── styles.css      # Application styles
├── server.js           # Express server
├── webpack.config.js   # Webpack configuration
├── .babelrc            # Babel configuration
└── package.json        # Dependencies and scripts
```

## Requirements

- Node.js >= 18.0.0
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/iMateo/react-node-api.git
cd react-node-api

# Install dependencies
npm install
```

## Usage

### Development

```bash
# Build frontend (development mode)
npm run build:dev

# Start server with auto-reload
npm run dev

# Watch frontend changes
npm run watch
```

### Production

```bash
# Build frontend (production mode)
npm run build

# Start server
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | /api/health    | Health check         |
| GET    | /api/info      | Application info     |
| GET    | /api/items     | Get all items        |
| GET    | /api/items/:id | Get item by ID       |
| POST   | /api/items     | Create new item      |
| PUT    | /api/items/:id | Update item          |
| DELETE | /api/items/:id | Delete item          |

### Example API Request

```bash
# Get all items
curl http://localhost:3000/api/items

# Create new item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "New Item", "description": "Description"}'
```

## MongoDB Integration

To connect to MongoDB, update `api/index.js`:

```javascript
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectDB() {
  await client.connect();
  const db = client.db('your_database');
  return db;
}
```

## Environment Variables

| Variable | Default | Description      |
|----------|---------|------------------|
| PORT     | 3000    | Server port      |

## Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm start`       | Start production server        |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build frontend (production)    |
| `npm run build:dev` | Build frontend (development) |
| `npm run watch`   | Watch and rebuild frontend     |

## Technologies

- [React](https://react.dev/) - UI library
- [Express](https://expressjs.com/) - Web framework
- [Webpack](https://webpack.js.org/) - Module bundler
- [Babel](https://babeljs.io/) - JavaScript compiler
- [MongoDB](https://www.mongodb.com/) - Database driver

## License

GPL-3.0 - see [LICENSE](LICENSE) for details.

## Author

Ihor Chyshkala

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
