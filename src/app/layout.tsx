import Providers from "@modules/providers"
import "styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" data-mode="light">
      <body>
        <Providers>
          <main className="relative overflow-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
