import { ApiClient } from './apiClient';

describe('API Tests', () => {
    const apiClient = new ApiClient('https://jsonplaceholder.typicode.com/'); // Replace with the actual base URL

    test('GET /api/endpoint should return 200 and expected data', async () => {
        const response = await apiClient.get('/todos/1');
        expect(response.status).toBe(200);
    //     expect(response.data).toEqual(expect.objectContaining({
    //         "userId"
    //     }));
     });

    test('POST /api/endpoint should create a resource and return 201', async () => {
        const payload = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        const response = await apiClient.post('/api/endpoint', payload);
        expect(response.status).toBe(201);
        expect(response.data).toEqual(expect.objectContaining({
            "userId": 1
        }));
    });

    test('PUT /api/endpoint/:id should update a resource and return 200', async () => {
        const payload = {
            // Add updated data here
        };
        const response = await apiClient.put('/api/endpoint/1', payload);
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expect.objectContaining({
            // Add expected properties here
        }));
    });

    test('DELETE /api/endpoint/:id should delete a resource and return 204', async () => {
        const response = await apiClient.delete('/api/endpoint/1');
        expect(response.status).toBe(204);
    });
});