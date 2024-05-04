import { useState } from 'react';
import { Button } from "@mantine/core";
import { FloorCreationModel } from '../FloorCreationModel';

export const InfinityTower = () => {
    const [floorCreationOpened, setFloorCreationOpened] = useState(false);
    return (
        <>
        <Button onClick = {() => setFloorCreationOpened(true)} variant='light' radius={8} style={{position: 'fixed', bottom: 42, right: 42}}>
            Mint a new Floor
        </Button>
        <FloorCreationModel opened={floorCreationOpened} onClose={() => setFloorCreationOpened(false)}></FloorCreationModel>
        </>
    )
    // <div>Tower</div>
}