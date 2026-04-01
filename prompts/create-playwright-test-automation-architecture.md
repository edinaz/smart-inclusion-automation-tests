# Create Playwright test automation architecture (TypeScript)

Copy everything inside the block below into your assistant chat. Adjust app URLs, auth, and domain names to match your product.

```
Create a complete Playwright test automation project structure using TypeScript.

Requirements:
- Follow clean architecture and industry best practices
- Use strict TypeScript configuration
- Separate concerns clearly (tests, pages, api, fixtures, utils)
- Use Page Object Model (POM) for UI tests
- Support both E2E (UI) and API testing
- Use ONLY data-testid selectors for UI interactions
- Follow AAA pattern in tests (Arrange, Act, Assert)
- No hard-coded waits (use proper async/await and Playwright waiting)
- Scalable and maintainable folder structure

Project structure should include:
- /tests (E2E tests)
- /pages (POM classes)
- /api (API tests and clients)
- /fixtures (test setup and reusable data)
- /utils (helpers and common functions)
- /config (environment and configuration files)
- /prompt-library (reusable Cursor prompts)

Include:
- Example Playwright config (playwright.config.ts)
- Example tsconfig.json (strict mode enabled)
- Example .env file
- Sample E2E test (login flow)
- Sample API test
- Example Page Object
- Example fixture

Coding standards:
- Clean, readable, and reusable code
- Proper naming conventions
- No duplication
- Use async/await correctly

Output:
- Full folder structure
- Code examples for each important part
- Short explanation of each folder’s purpose
```
