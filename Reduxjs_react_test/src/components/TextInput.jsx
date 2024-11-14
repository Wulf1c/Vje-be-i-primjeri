const TextInput = ({ label, value, onChange, inputProps }) => {
  return (
    <>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} />
    </>
  );
};

export default TextInput;
