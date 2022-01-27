import app from "./app";

const server = app({
  logger: {
    level: "info",
  },
});

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`App running on port http://localhost:${PORT}`);
});
