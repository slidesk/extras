/**
 * QRCode
 *
 * This component displays a qrcode
 *
 * `!qrcode(url, size, caption)`
 *
 * You need the plugin `@gouz/qrcode` to use it
 */
export default async (data) => {
  let newData = data;
  const occurences = [...newData.matchAll(/!qrcode\((.*)\)/g)];
  for await (const match of occurences) {
    const [url, size, caption] = match[1].split(",");
    const p = caption ? `<p class="sd-qrcode-caption">${url}</p>` : "";
    newData = newData.replace(
      match[0],
      `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div class="sd-qrcode" data-url="${url}" style="width: ${size}px"></div>${p}
      </div>`,
    );
  }
  return newData;
};
