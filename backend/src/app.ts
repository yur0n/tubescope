import express from 'express';
import apiRoutes from './api';

const app = express();

app.use('/api', apiRoutes);

export default app;