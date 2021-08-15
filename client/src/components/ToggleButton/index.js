function ToggleButton(props) {
    const {isToggled, onClick, text} = props

    return (
        <button className={isToggled ? "selected" : "unselected"} onClick={onClick}>
            {text}
        </button>
    )
}

export default ToggleButton