import { Header } from "./components/Header.jsx"
import { Main } from "./components/Main.jsx"
import { NewsSection } from "./components/NewsSection.jsx"
import { TopSection } from "./components/TopSection.jsx"

function App() {
  return (
    <div className="px-4 pt-6">
      <Header></Header>
      <div className="lg:flex lg:gap-8">
      <Main></Main>
      <NewsSection></NewsSection>
      </div>
      <TopSection></TopSection>
    </div>
  )
}

export default App
