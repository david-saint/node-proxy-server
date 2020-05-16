import url from 'url';
import { Router } from 'express';
import {catchErrors} from './handlers';

const router = Router();

// sample request catcher.
router.get('*', catchErrors(async (request, response) => {
  const proxy_url = url.format({
    protocol: 'https',
    hostname: process.env.PROXY_HOST,
    pathname: `${request.baseUrl}${request.path}`,
    query: request.query,
  });

  const {data} = await axios.get(proxy_url);

  response.status(200).send(data);
}));

export default router;