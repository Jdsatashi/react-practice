type InputEProps = {
  className?: string;
  id?: string;
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onInputChange: (name: string, value: string) => void;
};

export default InputEProps;