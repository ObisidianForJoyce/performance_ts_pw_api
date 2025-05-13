# Performance Testing Framework

This project is a performance testing framework that integrates API testing, end-to-end testing using Playwright, and performance testing with Artillery. 

## Project Structure

```
performance-testing-framework
├── src
│   ├── api
│   │   ├── apiTest.spec.ts      # API tests using Jest or Mocha
│   │   └── apiClient.ts          # HTTP client for API interactions
│   ├── e2e
│   │   └── playwrightTest.spec.ts # End-to-end tests using Playwright
│   └── performance
│       └── artilleryTest.yml      # Artillery configuration for performance testing
├── tests
│   └── sampleData.json            # Sample data for testing
├── package.json                    # NPM configuration and dependencies
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd performance-testing-framework
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure your environment:**
   Ensure that any necessary environment variables or configurations are set up for your API endpoints.

## Running Tests

### API Tests

To run the API tests, use the following command:
```
npm test src/api/apiTest.spec.ts
```

### End-to-End Tests

To run the end-to-end tests with Playwright, use:
```
npx playwright test src/e2e/playwrightTest.spec.ts
```

### Performance Tests

To execute the performance tests with Artillery, run:
```
artillery run src/performance/artilleryTest.yml
```

## Additional Information

- Ensure that your API is running and accessible before executing the tests.
- Modify the `artilleryTest.yml` file to adjust the performance testing scenarios as needed.
- Refer to the documentation of Jest, Mocha, Playwright, and Artillery for more advanced configurations and options.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.