type InputEProps = {
  label: string;
  atrb: {
    className?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    value: string;
  }
  onInputChange: (name: string, value: string) => void;
};

export default InputEProps;
