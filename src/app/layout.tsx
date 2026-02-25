import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LucianoAI Systems',
  description: 'Build. Automate. Scale. - Professional web development, automation, and AI solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
