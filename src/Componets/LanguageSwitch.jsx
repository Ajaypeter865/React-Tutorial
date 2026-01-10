import { useContext, useState, createContext } from "react"

const LanguageContext = createContext()

const LanguageSwitch = () => {

    const [changeLag, setChangeLag] = useState(false)

    return (
        <LanguageContext.Provider value={changeLag}>
            <div>
                <button onClick={() => { setChangeLag(!changeLag) }}>{changeLag ? 'Eng' : 'Es'}</button>
                <Title />
            </div>
        </LanguageContext.Provider>
    )
}

const Title = () => {

    const changeLag = useContext(LanguageContext)
    return (
        <div>
            <h2>{changeLag ? 'English' : 'Spanish'}</h2>
        </div>
    )
}
export default LanguageSwitch