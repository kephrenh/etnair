import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rootRoutes from './routes/root.routes';
import logger from './utils/logger.utils';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rootRoutes);

app.listen(PORT, () => {
  logger.info(`Server running on port http://localhost:${PORT}`);
});
