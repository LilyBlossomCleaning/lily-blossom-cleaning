import { ConnectedFormInput } from '@/app/@types/_types';
import { useFormStatus } from 'react-dom';

function FormInput({
  name,
  label,
  placeholder,
  className,
  inputClassName,
  minLength,
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
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`input input-bordered ${inputClassName}`}
        disabled={pending}
        minLength={minLength}
        maxLength={maxLength}
      />
    </span>
  );
}

export default FormInput;
