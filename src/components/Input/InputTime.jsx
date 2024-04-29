const InputTime = ({ timer, type, accion }) => {
  return (
    <div className="max-md:flex justify-between items-center">
      <p className="text-darkblue/25 font-bold mb-1">{type.split(/(?=[A-Z])/).join(' ').toLowerCase()}</p>
      <input
        className="h-10 bg-lightgrey text-darkblue w-36 rounded-xl px-4 font-bold focus:outline-darkblue/25"
        type="number"
        min={1}
        max={99}
        value={timer[type]}
        onChange={(e) => {
          if (e.target.value.length <= 2 && e.target.value >= 0) {
            accion({ [type]: e.target.value });
          }
        }}
      />
    </div>
  );
};

export { InputTime }