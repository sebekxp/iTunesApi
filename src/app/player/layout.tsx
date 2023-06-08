export const metadata = {
  title: 'Player',
  description: 'Player page',
};

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  return <main className="h-screen">{children}</main>;
}
