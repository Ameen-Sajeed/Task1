function InputBox({title,name,value,action}) {
    // console.log(name, 'name');
    // console.log(value, 'value');
  return (
      <>
      <input
        type="text"
        className="rounded-pill form-control bg-dark border-success mb-3"
        labelClass="text-white"
        // label=""
        name={name}
        value={value}
        placeholder={title}
        id="formControlLg"
        onChange={action}
      />
    </>
  );
}

export default InputBox;
