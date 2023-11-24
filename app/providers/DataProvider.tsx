import React, {createContext, Dispatch, FC, SetStateAction, useMemo, useState} from 'react';

interface IContext {
    activeStories: string[] | null
    setActiveStories: Dispatch<SetStateAction<string[] | null>>
}

export const DataContex = createContext<IContext>({} as IContext)

export const DataProvider:FC = ({children}) => {
    const [activeStories, setActiveStories] = useState<string[] | null>(null)

    const value = useMemo(
        () => ({
            activeStories,
            setActiveStories
        }),
        [activeStories]
    )

    return <DataContex.Provider value={value}>
        {children}
    </DataContex.Provider>
}