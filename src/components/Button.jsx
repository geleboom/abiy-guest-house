function Button({ text, type = "primary" }) {
  const styles =
    type === "primary"
      ? "bg-yellow-500 hover:bg-yellow-600 text-black"
      : "border border-white hover:bg-white hover:text-black text-white";

  return (
    <button
      className={`${styles} px-7 py-3 rounded-full transition duration-300 font-semibold`}
    >
      {text}
    </button>
  );
}

export default Button;