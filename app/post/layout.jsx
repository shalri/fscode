export default function PostLayout({ children }) {
  return (
    <main id="article" className="h-full flex-grow items-start">
      {children}
    </main>
  );
}
