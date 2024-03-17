import { ConnectedFormInput } from '@/app/@types/_types';
import { useFormStatus } from 'react-dom';

function ConnectedTextarea({
  name,
  label,
  placeholder,
  className,
  inputClassName,
  maxLength,
  required,
  value,
  onChange,
}: ConnectedFormInput) {
  const { pending } = useFormStatus();
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
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`textarea ${inputClassName}`}
        disabled={pending}
        required={required}
      ></textarea>
      <div className="label pt-0">
        <span className="label-text-alt">{`${
          value?.toString().length
        } / ${maxLength}`}</span>
      </div>
    </span>
  );
}

export default ConnectedTextarea;
