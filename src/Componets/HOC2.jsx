import EnhancedComponet from "./HOC"

const DashBoard = () => {
    console.log('Render Hoc2');

    return (
        <div>
            <h1>Welcome to Dashboard 😊</h1>
        </div>
    )
}

const FinalComponet = EnhancedComponet(DashBoard)

export default FinalComponet
