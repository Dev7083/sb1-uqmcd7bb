export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2024-12-18";

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || "production",
  "Missing environment variable: SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || "i1ng52im",
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
