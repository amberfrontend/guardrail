import { ReactNode } from 'react';

import Button from '../Button/Button';

interface TagProps {
  children: ReactNode;
  onRemove?(): void;
}

export default function Tag({ children, onRemove }: TagProps) {
  return (
    <div className="flex items-center gap-2 bg-primary-500 text-white rounded-3xl py-1 px-3">
      {children}
      {onRemove && (
        <Button
          ariaLabel="close"
          icon="close"
          type="icon-only"
          onClick={onRemove}
          onKeyUp={onRemove}
          onTouchEnd={onRemove}
        />
      )}
    </div>
  );
}
