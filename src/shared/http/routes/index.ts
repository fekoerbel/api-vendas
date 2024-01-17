import { Router } from "express";

const routes = Router();

routes.get('/', (requet, response) => {
  return response.json({ message: 'Hello Worlds' });
});

export default routes;

