interface HeaderComponentProps {
    section?: string
}

export const HeaderComponent = ({section}: HeaderComponentProps) => {
    return (
        <>
            <h1 className="mb-4 mt-2 py-5 text-left text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
               <span
                   className="bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent text-5xl text-pretty">
                    {section}
                </span>
            </h1>
        </>
    );
};