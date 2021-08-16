import './styles.css'

function Loading() {
    return (
        <div className="Loading">
            {/* 
                Credit to https://loading.io/css/ for the loading spinner.
                License CC0, so can be used freely.
            */}
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading