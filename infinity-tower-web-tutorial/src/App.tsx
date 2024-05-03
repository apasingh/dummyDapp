// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Container } from "@mantine/core";
import './App.css'
import { WalletInstallation } from "./components/organisms/WalletInstallation";

function App() {
  // const [count, setCount] = useState(0) //dont need for our code
  const { ethereum } = window as any;
  return (
      <div className = "App">
        {!ethereum ? (
          <Container p="lg">
            <WalletInstallation />
          </Container>
        ) : null}

      </div>
    );
}

export default App
