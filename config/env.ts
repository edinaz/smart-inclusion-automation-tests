import dotenv from "dotenv";

dotenv.config();

function getEnv(name: string, fallback?: string): string {
  const raw = process.env[name];
  if (raw !== undefined && raw !== "") {
    return raw;
  }
  if (fallback !== undefined) {
    return fallback;
  }
  throw new Error(`Missing required environment variable: ${name}`);
}

export const env = {
  baseURL: getEnv("BASE_URL", "http://localhost:3000"),
  apiURL: getEnv("API_URL", "http://localhost:3000/api"),
  e2eUserEmail: getEnv("E2E_USER_EMAIL", "test.user@example.com"),
  e2eUserPassword: getEnv("E2E_USER_PASSWORD", "ChangeMe123!"),
} as const;
