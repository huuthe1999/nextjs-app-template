import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Sumana } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const sumana = Sumana({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sumana' })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${sumana.variable} font-sumana`}>
			<div className="min-h-screen max-w-7xl mx-auto p-5">
				<Component {...pageProps} />
			</div>
		</main>
	)
}
