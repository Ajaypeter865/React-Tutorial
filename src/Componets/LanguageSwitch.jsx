import { useContext, useState, createContext } from "react"

// const LanguageContext = createContext()

// const UseContext = () => {
//     console.log('Render LanguageSwitch');


//     const [changeLag, setChangeLag] = useState(false)

//     return (
//         <LanguageContext.Provider value={changeLag}>
//             <div>
//                 <button onClick={() => { setChangeLag(!changeLag) }}>{changeLag ? 'Eng' : 'Es'}</button>
//                 <Title />
//             </div>
//         </LanguageContext.Provider>
//     )
// }

// const Title = () => {

//     const changeLag = useContext(LanguageContext)
//     return (
//         <div>
//             <h2>{changeLag ? 'English' : 'Spanish'}</h2>
//         </div>
//     )
// }

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