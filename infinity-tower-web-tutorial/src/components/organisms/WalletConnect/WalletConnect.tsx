import { Button } from "@mantine/core";
import { useEthers } from "@usedapp/core";

export const WalletConnect =() =>{
    const { activateBrowserWallet, account, deactivate} = useEthers(); //makes connection accessible in whole app
    if (account) {
        return <Button onClick={deactivate}> Disconnect</Button>
    } else{
    return <Button onClick={activateBrowserWallet}> Connect to Metamask </Button>
}
};