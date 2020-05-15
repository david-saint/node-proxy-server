import url from 'url';
import { Router } from 'express';

const router = Router();
const routerGroup = Router();

// Route group for all the Resort requests
router.use('/api/', routerGroup);

// sample request catcher.
routerGroup.get('/search/devices', (request, response) => {
  response.status(200).json({
    data: {
      path: request.path,
      query: request.query,
      test: url.format({
        protocol: 'https',
        hostname: 'example.com',
        pathname: `${request.baseUrl}${request.path}`,
        query: request.query,
      }),
    },
  })
});

export default router;