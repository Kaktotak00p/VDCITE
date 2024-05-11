export const metadata = {
  title: 'TRAFFHUB',
  description: 'Придумать сюда текст',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
