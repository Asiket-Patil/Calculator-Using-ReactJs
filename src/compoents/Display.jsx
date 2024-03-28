

const Display = ({ displayValue }) => {
  return (
    <input
      className='display'
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
