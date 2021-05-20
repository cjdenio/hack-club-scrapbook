const { WebClient } = require("@slack/web-api");

async function deploy() {
  const client = new WebClient(process.env.SLACK_TOKEN);

  client.chat.postMessage({
    channel: "C015M6U6JKU",
    text: "hmm",
  });
}

deploy().catch((e) => {
  console.log(`error deploying: ${e}`);
  process.exit(1);
});
