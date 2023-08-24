import LOGGER from './config/LOGGER';
import app from './config/express';
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
LOGGER.info(`Server running at ${PORT}`);
});

