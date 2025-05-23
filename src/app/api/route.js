async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const {
      First_Name,
      Last_Name,
      Birth_Date,
      Address,
      Contact_Number,
      Email_Address,
      Answer,
    } = req.body;

    const url =
      "https://script.google.com/macros/s/AKfycbzJy4Pc_F0vvTpJdg4JuSO5iqkYnXJigh4fpJhdexGGxLFpgu6ugT68aYbhhS_TSUOC-Q/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `First_Name=${First_Name}&Last_Name=${Last_Name}&Birth_Date=${Birth_Date}&Address=${Address}&Contact_Number=${Contact_Number}&Email_Address=${Email_Address}&Answer=${Answer}`,
      });

      const data = await response.text();
      res.status(201).json({ message: "Form submitted successfully!" });
    } catch (error) {
      throw new Error(`Message: ${error}`);
    }
  }
}

export default handler;

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
