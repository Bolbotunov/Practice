export default function UseChildren({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="childrenDiv">{children}</div>;
}
