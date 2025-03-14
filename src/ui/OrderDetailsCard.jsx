
export default function OrderDetailsCard({ children, cardProps }) {
  return (
    <div
      className="flex flex-col gap-5 flex-1 shadow-card-shadow border border-[#ddd] rounded-sm bg-white lg:max-w-md w-full xlg:px-8 md:px-6 px-4 xlg:py-7 md:py-5 py-4"
      {...cardProps}
    >
      {children}
    </div>
  );
}

OrderDetailsCard.Header = function Header({ children, headerProps }) {
  return (
    <div className="flex flex-col gap-2 flex-1" {...headerProps}>
      {children}
    </div>
  );
};

OrderDetailsCard.Body = function Body({ children, bodyProps }) {
  return (
    <div className="flex flex-col gap-2 flex-1" {...bodyProps}>
      {children}
    </div>
  );
};

OrderDetailsCard.Footer = function Footer({ children, footerProps }) {
  return (
    <div
      className="flex flex-col gap-2 flex-1 border-t border-[#ddd] pt-4"
      {...footerProps}
    >
      {children}
    </div>
  );
};
