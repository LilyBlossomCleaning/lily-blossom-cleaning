import { ConnectedFormInput } from '@/app/_types';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

function ConnectedTextarea({
  name,
  label,
  placeholder,
  className,
  inputClassName,
  maxLength,
  required,
}: ConnectedFormInput) {
  const { pending } = useFormStatus();
  const [count, setCount] = useState(0);
  return (
    <span className={className}>
      <div className="label">
        <label htmlFor={name} className="label-text">
          {label}
        </label>
      </div>
      <textarea
        id={name}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`textarea ${inputClassName}`}
        onChange={(e) => setCount(e.target.value.length)}
        disabled={pending}
        required={required}
      ></textarea>
      <div className="label pt-0">
        <span className="label-text-alt">{`${count} / ${maxLength}`}</span>
      </div>
    </span>
  );
}

export default ConnectedTextarea;
