export default function AmityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
export const metadata = {
  title: 'Amity University Admissions -  Apply and Secure Your Seat',
  description: 'Apply for Amity University programs. Get quality education with globally recognized degrees.',
};