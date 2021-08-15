import ToggleButton from "../ToggleButton"

function ContentSelector(props) {
    const {selected, setSelected} = props

    const toggleShark = () => {
        // Make sure that at least one option is always selected
        if (!(selected.sharks && !selected.cats)) {
            setSelected({...selected, sharks: !selected.sharks})
        }
    }

    const toggleCat = () => {
        if (!(selected.cats && !selected.sharks)) {
            setSelected({...selected, cats: !selected.cats})
        }
    }

    return (
        <div>
            <ToggleButton 
                text={"Sharks"} 
                isToggled={selected.sharks}
                onClick={toggleShark}
            />
            <ToggleButton 
                text={"Cats"} 
                isToggled={selected.cats}
                onClick={toggleCat}
            />
        </div>
    )
}

export default ContentSelector