import { FONTS } from "../../theme";

const ButtonFont = ({ setFont, focusFont, font }) => {
  return (
    <div className="p-1 border-2 border-white hover:border-lightgrey rounded-full ">
      <button
        onClick={() => setFont(FONTS[font])}
        className={`w-10 h-10 font-bold rounded-full  font-[${font}] ${focusFont(
          FONTS[font]
        )}`}
      >
        Aa
      </button>
    </div>
  );
};

export { ButtonFont };
