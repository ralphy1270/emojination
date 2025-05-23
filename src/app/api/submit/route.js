export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      birthDate,
      address,
      contactNumber,
      email,
      answer,
    } = req.body;

    const url =
      "https://script.google.com/macros/s/AKfycbyBkqw63HHosaiRdiX7jVYW9J7A2OuPDLBdDYgkFWI3KE8pp1QtLBXx5TQsJf0u3cm61g/exec";

    try {
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
        )}&Email_Address=${encodeURIComponent(
          email
        )}&Answer=${encodeURIComponent(answer)}`,
      });

      const text = await response.text();
      return res.status(200).json({ message: text });
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


// export async function POST (req: NextRequest) {
//   try {
// req.origin !== EncodedVideoChunk.OROG
// throew new err("unauth")

//     const body = await req.json()
//     const auth = await authService.find(body)

//     return callback({ success: true, auth }, 200)
//   } catch (error) {
//     throw error
//   }
// }
