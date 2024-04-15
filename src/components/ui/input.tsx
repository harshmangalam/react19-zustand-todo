type TextInputProps = React.ComponentProps<"input"> & {
  label: string;
};
export function TextInput(props: TextInputProps) {
  const { label, id, ...rest } = props;
  return (
    <label htmlFor={id} className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input id={id} className="input input-bordered w-full" {...rest} />
    </label>
  );
}
