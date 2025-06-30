// app/layout.js
import "./style/main.scss";

export const metadata = {
  title: "Test Project",
  description: "Main layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
