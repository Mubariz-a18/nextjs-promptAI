import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title: "Promtopia",
    description: "Learn and Grow with AI Prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <Provider>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                <Nav/>
                    {children}
                </main>
            </body>
            </Provider>
        </html>
    )
}

export default RootLayout