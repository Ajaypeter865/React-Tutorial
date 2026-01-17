
const EnhancedComponet = (ReplaceableComponet) => {

    const NewComponent = (props) => {
    console.log('Render Hoc');


        return (
            <div>
                <ReplaceableComponet {...props} />
            </div>
        )
    }

    return NewComponent
}

export default EnhancedComponet