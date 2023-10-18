import LOGGER from './config/LOGGER';
import app from './config/express';
const PORT = process.env.PORT || 4001;
import { ConnectionManager } from "./utilities/browserPool";
// const ConnectionManager = require('./utilities/browserPool'); // Adjust the path as needed
 const connectionManager = new ConnectionManager();

app.listen(PORT, () => {
LOGGER.info(`Server running at ${PORT}`);
});
export default connectionManager
