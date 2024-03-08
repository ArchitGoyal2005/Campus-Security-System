function Button({ label }) {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-[#82B1C1] rounded-full border-[#82B1C1]">
      {label}
    </button>
  );
}

export default Button;
