export const API_BASE_URL = "https://api.github.com";

export async function getUsersByQuery(searchQuery: string): Promise<any> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/users?q=${searchQuery}`
    );
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch", error);
  }
}
