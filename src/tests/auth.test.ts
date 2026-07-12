import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key from a valid authorization header", () => {
    const headers = {
      authorization: "ApiKey IXYSD23",
    };

    expect(getAPIKey(headers)).toBe("IXYSD23-break");
  });

  test("returns null when the authorization header is missing", () => {
    const headers = {
      authentication: "YESAUTH",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the authorization scheme is not ApiKey", () => {
    const headers = {
      authorization: "Bearer IXYSD23",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the authorization header does not contain a key", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
