import { useContext, useState, createContext } from "react"

const languageContext = createContext()

const UseContext = () => {

    const [language, setLanguage] = useState(false)

    return (
        <languageContext.Provider value={language}>
            <div>
                <button onClick={() => setLanguage(!language)}>{language ? 'English' : 'Spain'}</button>
                <Title />
            </div>

        </languageContext.Provider>
    )
}


const Title = () => {

    const language = useContext(languageContext)
    console.log('language =', language);


    return (
        <div>
            <h1>Language : {language ? 'English' : 'Spain'}</h1>
        </div>
    )
}


export default UseContext