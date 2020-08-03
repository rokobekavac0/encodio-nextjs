import { NextApiRequest, NextApiResponse } from "next";
import { decodeString, IDecodeStringRet } from "../../utils/decoder";
import { NullablePartial } from "../../utils/partialNull";

interface IDecodeType extends NullablePartial<IDecodeStringRet> {
  error: string | null;
}

function decodeHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const { isEncryped, amount }: IDecodeStringRet = decodeString(
          body.data,
          process.env.NUM_CODE?.split(" ").map((e) => parseInt(e))!
        );

        res
          .status(200)
          .json({ error: null, amount, isEncryped } as IDecodeType);
      } catch (error) {
        res.status(500).json({ error: error } as IDecodeType);
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default decodeHandler;
