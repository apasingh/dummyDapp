// Import MantineProvider from @mantine/core
import { MantineProvider, Container } from '@mantine/core';
import './App.css';
import { WalletInstallation } from "./components/organisms/WalletInstallation";

function App() {
  const { ethereum } = window as any;
  return (
    // Wrap your entire app with MantineProvider
    <MantineProvider>
      <div className="App">
        {!ethereum ? (
          <Container p="lg">
            <WalletInstallation />
          </Container>
        ) : null}
      </div>
    </MantineProvider>
  );
}

export default App;
