// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configurar dotenv para usar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

// Iniciar el servidor y conectar a MongoDB
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
