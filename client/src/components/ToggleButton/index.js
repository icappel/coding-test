import './styles.css'

function ToggleButton(props) {
    const {isToggled, onClick, text} = props

    return (
        <button className={"toggle-button" + (isToggled ? " selected" : " unselected")} onClick={onClick}>
            {text}
        </button>
    )
}

export default ToggleButton