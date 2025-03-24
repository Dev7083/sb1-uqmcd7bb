export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen bg-background pb-16 pt-24'>{children}</main>
  );
}
export const metadata = {
  title: 'CollegeHike | Universities - Browse amongst Best Universities',
  description: 'Apply for University programs. Get details of collegs offering globally recognized degrees.',
};