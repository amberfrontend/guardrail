import { ReactNode } from 'react';

interface CardProps {
  actionHeader?: ReactNode;
  actionFooterPrimary?: ReactNode;
  actionFooterSecondary?: ReactNode;
  children: ReactNode;
  title?: string;
}

export default function Card({
  actionHeader,
  actionFooterPrimary,
  actionFooterSecondary,
  children,
  title,
}: CardProps) {
  const hasFooter = actionFooterPrimary || actionFooterSecondary;

  return (
    <div
      role="group"
      className="
        bg-white
        rounded
        shadow
        shadow-zinc-300
        p-6
        sm:w-full
        md:w-full
        md:max-w-3xl
        lg:w-3/4
        lg:max-w-3xl
        xl:w-3/4
        xl:max-w-3xl
        2xl:w-1/3
        2xl:max-w-3xl"
    >
      {title && (
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {actionHeader && actionHeader}
        </div>
      )}
      {children}
      {hasFooter && (
        <div className="flex gap-4 justify-end mt-6">
          {actionFooterSecondary && actionFooterSecondary}
          {actionFooterPrimary && actionFooterPrimary}
        </div>
      )}
    </div>
  );
}
