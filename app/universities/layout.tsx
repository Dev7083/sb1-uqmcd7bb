export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen bg-background pb-16 pt-24'>{children}</main>
  );
}
