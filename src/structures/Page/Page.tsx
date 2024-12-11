import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  title: string;
}

export default function Page({ children, title }: PageProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      {children}
    </div>
  );
}
