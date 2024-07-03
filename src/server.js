import cors from 'cors';
import express from 'express';

const app = express();

// Configurar CORS para permitir solicitudes desde 'http://localhost:5173'
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}));

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para manejar solicitudes POST
app.post('/', (req, res) => {
  const { formacion, url } = req.body;
  res.json({ message: `¡Tarjeta creada con éxito! Categoría: ${formacion}, Video: ${url}` });
});

// Endpoint para manejar solicitudes GET a /api/config
app.get('/api/config', (req, res) => {
  res.json({ config: 'Configuración de la aplicación' });
});

// Iniciar el servidor en el puerto 3001
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
