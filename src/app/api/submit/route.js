export async function POST(request) {
  try {
    const headers = request.headers;
    const origin = headers.get("origin") || headers.get("referer") || "unknown";

    if (origin !== "http://localhost:3000") {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    const {
      firstName,
      lastName,
      birthDate,
      address,
      contactNumber,
      email,
      answer,
    } = body;

    if (!firstName || !lastName) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
//https://script.google.com/macros/s/AKfycbwb9FWT9cWWRcmjuIUsXOMclySxrwVITrx5jBbhZbdn0mXo_VwAeK-zUm6XKoDGcGIUkg/exec
    const url =
      "https://script.google.com/macros/s/AKfycbwb9FWT9cWWRcmjuIUsXOMclySxrwVITrx5jBbhZbdn0mXo_VwAeK-zUm6XKoDGcGIUkg/exec";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `First_Name=${encodeURIComponent(
        firstName
      )}&Last_Name=${encodeURIComponent(
        lastName
      )}&Birth_Date=${encodeURIComponent(
        birthDate
      )}&Address=${encodeURIComponent(
        address
      )}&Contact_Number=${encodeURIComponent(
        contactNumber
      )}&Email_Address=${encodeURIComponent(email)}&Answer=${encodeURIComponent(
        answer
      )}`,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Google Script Error: ${text}`);
    }

    const data = await response.text();
    console.log(data);

    return new Response(
      JSON.stringify({ message: data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(
      JSON.stringify({ message: "Server error", detail: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
