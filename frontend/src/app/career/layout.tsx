import Header from "@/app/components/layouts/Header";

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
