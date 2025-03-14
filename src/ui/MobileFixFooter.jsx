export default function MobileFixFooter({ children, className = "" }) {
  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 z-[100] right-0 p-2 flex gap-3 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
