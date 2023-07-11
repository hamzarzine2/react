const Button = ({ handleClick, text,delta }) => <button onClick={handleClick} data-delta={delta}>{text}</button>

  export default Button;