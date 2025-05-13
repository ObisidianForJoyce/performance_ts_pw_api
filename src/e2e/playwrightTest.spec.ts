import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/apiClient';

const apiClient = new ApiClient('https://jsonplaceholder.typicode.com');

test.describe('End-to-End Tests', () => {
    test('should load the homepage and verify API response', async ({ page }) => {
        // Navigate to the homepage
       // await page.goto('https://your-application-url.com');

        // Verify the page title
        //await expect(page).toHaveTitle('Expected Title');

        // Perform an API request
        const response = await apiClient.get('/todos/1');
        
        // Assert the API response
        expect(response.status).toBe(200);
        //expect(response.data).toEqual({ key: 'expectedValue' });
    });

    // test('should interact with UI elements', async ({ page }) => {
    //     await page.goto('https://your-application-url.com');

    //     // Click a button
    //     await page.click('text=Click Me');

    //     // Verify the result after clicking
    //     const result = await page.locator('#result').innerText();
    //     expect(result).toBe('Expected Result After Click');
    // });
});