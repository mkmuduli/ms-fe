const IconButton = ({ children, iconDesc }) => {
    return (
        <button
            type="button"
            className="focus:ring-2 font-medium text-sm p-2.5 text-center inline-flex items-center rounded-md border-2 "
        >
            {children}
            {iconDesc && <span class="sr-only">{iconDesc}</span>}
        </button>
    )
}

export default IconButton;