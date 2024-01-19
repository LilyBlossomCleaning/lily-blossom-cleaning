'use client';

import { useFormStatus } from 'react-dom';

export default function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={props.disabled || pending}
      className={`btn ${props.className}`}
    >
      <span className="grid grid-flow-col items-center justify-center gap-1">
        {props.children}
        {pending && <span className="loading loading-dots loading-xs"></span>}
      </span>
    </button>
  );
}
