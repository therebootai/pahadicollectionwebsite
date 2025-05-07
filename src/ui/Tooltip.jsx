export default function Tooltip({ children, className = "" }) {
  return <div className={`relative flex-1 group ${className}`}>{children}</div>;
}

Tooltip.Trigger = function Trigger({ children, className = "" }) {
  return (
    <div className={`${className}`} aria-describedby="tooltip-id">
      {children}
    </div>
  );
};

Tooltip.Content = function Content({ children, className = "" }) {
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex group-focus-within:flex rounded-sm px-4 py-4 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-custom-light-gray top-full w-full ${className}`}
      role="tooltip"
      id="tooltip-id"
    >
      {children}
    </div>
  );
};
