import type { Request, Response, NextFunction } from "express";

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const originalSend = res.send;

  console.log("--------------------------------------------------------");

  console.log("Origin", req.headers.origin);

  console.log(
    `Route: ${req.url}\nRequest Method: ${req.method}\nRequest Body: ${
      !!Object.keys(req.body).length
        ? JSON.stringify(req.body, undefined, 2)
        : "No body"
    }`,
  );

  res.send = function (body) {
    console.log("Response Body:", JSON.parse(body));

    // @ts-expect-error don't know what error this is
    return originalSend.apply(this, arguments);
  };

  next();
}
