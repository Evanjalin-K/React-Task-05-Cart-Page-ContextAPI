import Card from './components/Card'
import { CardProvider } from './contextAPI/CardContext';
const App = () => {
  return (
      <CardProvider>
      <Card/>
      </CardProvider>
  )
}

export default App;