import { NextApiRequest, NextApiResponse } from "next";
import { decodeString, IDecodeStringRet } from "../../utils/decoder";
import { NullablePartial } from "../../utils/partialNull";
import { CLIENT_RENEG_LIMIT } from "tls";

interface IDecodeType extends NullablePartial<IDecodeStringRet> {
  error: string | null;
}

function decodeHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const parsedBody = JSON.parse(body);
  switch (method) {
    case "POST":
      try {
        if (!parsedBody.data) throw "no data in body";
        const { isEncryped, amount, encodedWords }: IDecodeStringRet = decodeString(parsedBody.data, process.env.NUM_CODE?.split(" ").map((e) => parseInt(e))!);

        res.status(200).json({ error: null, amount, isEncryped, encodedWords } as IDecodeType);
      } catch (error) {
        console.log(error);
        res.status(200).json({ error: error } as IDecodeType);
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default decodeHandler;
