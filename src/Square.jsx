import ODuck from "./tic-tac-O.png";
import XDuck from "./tic-tac-X.png";

export default function Square({ value, onClick }) {
  function getBackgroundImg() {
    if (value === "X") return XDuck;
    if (value === "O") return ODuck;
    return "";
  }

  return (
    <div
      className="square"
      onClick={onClick}
      style={{ backgroundImage: `url(${getBackgroundImg()})` }}
    />
  );
}
