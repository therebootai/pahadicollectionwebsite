import Image from "next/image";

export default function ProfileCard({ children, className = "" }) {
  return (
    <div
      className={`flex xlg:gap-6 gap-4 flex-1 bg-white rounded-sm border border-[#ddd] hover:shadow-card-shadow transition-shadow duration-300 hover:border-transparent xlg:px-6 px-4 xlg:py-5 py-4 relative ${className}`}
    >
      {children}
    </div>
  );
}

ProfileCard.Cover = function Cover({ src, alt, height, width, coverProps }) {
  return (
    <Image src={src} alt={alt} height={height} width={width} {...coverProps} />
  );
};

ProfileCard.Box = function Box({ children, boxProps }) {
  return <div {...boxProps}>{children}</div>;
};

ProfileCard.Btn = function Btn({ children, buttonProps }) {
  return <button {...buttonProps}>{children}</button>;
};
