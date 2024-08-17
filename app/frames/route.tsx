/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const handler = frames(async () => {
  return {
    image: <div tw="flex">Welcome</div>,
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/mint-page", query: { foo: "bar" } }}
      >
        Begin Reading
      </Button>,
      // Without query params
      <Button action="link" target="https://www.nftarot.com">
        Learn More
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
