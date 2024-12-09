import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';

const app = express();

// Integrate Lab5 and Hello modules
Lab5(app);
Hello(app);

// Define the port dynamically
const PORT = process.env.PORT || 4000; // Changed default port to 4000

// Start the server and handle potential errors
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
        process.exit(1); // Exit the process to prevent hanging
    } else {
        console.error('Server error:', err);
    }
});