const axios = require('axios');

const BASE_URL = 'http://localhost:8080';
const SUCCESS_STATUS_CODE = 200;

describe('Sanity Checks', () => {
    it('should see the homepage', async () => {
        await axios.get(`${BASE_URL}/`).then((response) => {
            expect(response.status).toBe(SUCCESS_STATUS_CODE);
        })
    });
  });