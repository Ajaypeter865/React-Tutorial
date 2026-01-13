
const EnhancedComponet = (ReplaceableComponet) => {

    const NewComponent = (props) => {

        return (
            <div>
                <ReplaceableComponet {...props} />
            </div>
        )
    }

    return NewComponent
}

export default EnhancedComponet