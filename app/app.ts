import LOGGER from './config/LOGGER';
import app from './config/express';
const PORT = process.env.PORT || 4001;
// const ConnectionManager = require('./utilities/browserPool'); // Adjust the path as needed

app.listen(PORT, () => {
LOGGER.info(`Server running at ${PORT}`);
});
