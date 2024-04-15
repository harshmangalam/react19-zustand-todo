type TextareaProps = React.ComponentProps<"textarea"> & {
  label: string;
};
export function Textarea(props: TextareaProps) {
  const { label, id, ...rest } = props;
  return (
    <label htmlFor={id} className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        id={id}
        className="textarea textarea-bordered w-full"
        {...rest}
      />
    </label>
  );
}
