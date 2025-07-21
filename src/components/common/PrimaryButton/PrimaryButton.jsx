const PrimaryButton = ({
    text,
    onclickFn,
    classname,
    variant = "light",
    size = "normal",
    ...rest
}) => {
    return (
        <button
            onClick={onclickFn}
            {...rest}
            className={` ${size === "small" ? "px-1 py-1 text-sm" : "px-5 py-2 text-md"}  ${variant === "light" ? "bg-green-400 text-black" : "bg-black text-white"} border transition-all duration-150 cursor-pointer rounded-xl text-black ${classname}`}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
