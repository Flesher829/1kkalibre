import { NextApiRequest, NextApiResponse } from "next";
import qs from "querystring";

const APP_ID = "Y378364";
const APP_SECRET = "130089196d1424995dea84caf087a6ef";
const CODE = "frc5f2d7516622707393e6484e020e20";
const REDIRECT_URL = "http://localhost:3000/";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "Hello from deezer" });
}

// fr4c3f3a9a6a3c2631dae197fcd96852
// export const getAccessToken = () => {
//   return fetch(
//     `https://connect.deezer.com/oauth/access_token.php?app_id=${APP_ID}secret=${APP_SECRET}&code=${CODE}`,
//     {
//       method: 'POST',
//       body: qs({
//         perms: 'email',
//       }),
//     }
//   );
// };

export const getCharts = async () => {
  // const accessToken = getAccessToken();
};

// https://connect.deezer.com/oauth/auth.php?app_id=378364&redirect_uri=http://localhost:3000/&perms=listening_history

// code:http://localhost:3000/?code=

// http://localhost:3000/?code=

// fr76293268059dd540bf5d9cafe2cbbb

// fr6dc9ff43beea029566d80a40eabead
