// Import MantineProvider from @mantine/core
import { Container, /*Header,*/ Title} from '@mantine/core';
import './App.css';
import { WalletInstallation } from "./components/organisms/WalletInstallation";
import { WalletConnect } from "./components/organisms/WalletConnect";
import { InfinityTower } from './components/organisms/InfinityTower';
import { useFloors } from './hooks/Floors';


function App() {
  const { ethereum } = window as any;
  const { floors } = useFloors();
  return (
    // Error from before was that I didn't wrap your entire app with MantineProvider
    
      <div className="App">

        <div className='header' style={{ height: 60, paddingLeft: 'x1', display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div><Title> Infinity Tower </Title></div>
            <div><WalletConnect/></div>
        </div>

        {!ethereum ? (
          <Container p="lg">
            <WalletInstallation />
          </Container>
        ) : (<InfinityTower floors={floors}/> )}
      </div>
  );
}

export default App;
