import {env} from 'process';
import Redis from 'ioredis';

// Crée un client Redis en utilisant les variables d'environnement
const client = new Redis({
    host: "127.0.0.1",
    port: 6379
});

// Écoute les erreurs de connexion
client.on('error', (err) => {
    console.error(`Redis Client Error: ${err}`);
});

// Connecte le client et vérifie le statut
client.on('connect', () => {
    console.log('Connected to Redis server');
});

client.on('ready', () => {
    console.log('Redis client is ready');
});

client.on('end', () => {
    console.log('Connection to Redis closed');
});

export { client };