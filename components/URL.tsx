function getLinkShorte(url: string) {
  const parsedUrl = new URL(url)
  return parsedUrl.hostname
}

export default function LinkComponent({ url }: { url: string }) {
  const shortLink = getLinkShorte(url)

  return <p> {shortLink}</p>
}
