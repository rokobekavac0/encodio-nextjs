import { NextApiRequest, NextApiResponse } from "next";
import { encodeString, IEncodeStringRet } from "../../utils/encoder";
import { NullablePartial } from "../../utils/partialNull";

interface IEncodeType extends NullablePartial<IEncodeStringRet> {
  error: string | null;
}

function encodeHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const parsedBody = JSON.parse(body);
  switch (method) {
    case "POST":
      try {
        if (!parsedBody.data) throw "no data in body";
        const { encodedStr }: IEncodeStringRet = encodeString({
          text: parsedBody.data,
          numCodeI: process.env.NUM_CODE?.split(" ").map((e) => parseInt(e))!,
        });
        // Get data from your database
        res.status(200).json({ encodedStr } as IEncodeType);
      } catch (error) {
        res.status(200).json({ error: error } as IEncodeType);
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default encodeHandler;
