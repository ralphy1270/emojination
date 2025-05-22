// export async function POST (req: NextRequest) {
//   try {
//     const body = await req.json()
//     const auth = await authService.find(body)

//     return callback({ success: true, auth }, 200)
//   } catch (error) {
//     return callback({ success: false, message: error.message }, error.status)
//   }
// }