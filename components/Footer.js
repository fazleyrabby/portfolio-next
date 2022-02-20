export const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center lg:text-left dark:bg-black dark:text-white">
            <div className="text-gray-700 text-center p-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
                © {new Date().getFullYear()} Copyright: Fazley Rabbi
            </div>
        </footer>
    )
}