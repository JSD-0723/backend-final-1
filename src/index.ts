import { app, server } from './app';

const port = app.get('port');

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
