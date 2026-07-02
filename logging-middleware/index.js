const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

export async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_LOG_TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("logging failed:", error);
    return null;
  }
}