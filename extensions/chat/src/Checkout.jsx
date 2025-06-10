import {
  Chat,
  reactExtension
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.chat.render", () => (
  <Extension />
));

function Extension() {
  return (
    <Chat
      inlineSize={165}
      blockSize={62}
      onReady={({ postMessage }) => {
        console.log("messaging channel ready");
      }}
      onMessage={(event) => {
        console.log(event);
      }}
    />
  );
}
