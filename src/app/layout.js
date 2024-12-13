import './globals.css';

export const metadata = {
  title: 'Farcastlevote',
  description: 'A Farcaster Frame app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
