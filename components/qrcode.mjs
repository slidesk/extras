/**
 * QRCode
 *
 * This component displays a qrcode
 *
 * `!qrcode(url, size, caption)`: size in px (200 by default), caption optional
 *
 * You need the plugin `@gouz/qrcode` to use it
 */
export default async (data) => {
  let newData = data;
  const occurences = [...newData.matchAll(/!qrcode\(([^)]*)\)/g)];
  for await (const match of occurences) {
    // the caption keeps its commas
    const [url, size, ...rest] = match[1].split(",").map((a) => a.trim());
    const caption = rest.join(", ");
    const p = caption ? `<p class="sd-qrcode-caption">${caption}</p>` : "";
    newData = newData.replace(
      match[0],
      `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div class="sd-qrcode" data-url="${url}" style="width: ${Number(size) || 200}px"></div>${p}
      </div>`,
    );
  }
  return newData;
};
