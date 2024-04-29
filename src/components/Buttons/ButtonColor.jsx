import { COLORS } from "../../theme";

const ButtonColor = ({ setColor , focusColor, color}) => {
  return (
    <div className="p-1 border-2 h-[52px] border-white hover:border-lightgrey rounded-full ">
    <button
      onClick={() => setColor(COLORS[color])}
      className={`w-10 h-10 rounded-full bg-${color}`}
    >
      {focusColor(COLORS[color])}
    </button>
  </div>
  )
};

export { ButtonColor }