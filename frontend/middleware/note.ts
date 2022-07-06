// import axios from 'axios'

// export default async function (content: any) {
//   if (content.params.id !== undefined) {
//     const { data } = await axios.get(
//       `${process.env.SERVER_URL}/note/${content.params.id}`
//     )

//     console.log('data -->', data)

//     if (data.status === 200) {
//       if (!data.result.length) {
//         content.redirect('/')
//       }
//     } else {
//       content.redirect('/')
//     }
//   }
// }
