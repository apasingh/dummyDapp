import { useState } from 'react';
import { Button, Grid, Text, Card } from "@mantine/core";
import { useEthers, Sepolia } from '@usedapp/core';
import { FloorCreationModel } from '../FloorCreationModel';
import { FloorItem } from '../../../hooks/Floors/Floor';

export type InfinityTowerProps = {
    floors: FloorItem[];
}


export const InfinityTower = ({floors}: InfinityTowerProps) => {
    const [floorCreationOpened, setFloorCreationOpened] = useState(false);
    const { account, chainId } = useEthers();

    return (
        <>
        <Grid>
            {floors.map((floor, index) => (
                <Grid.Col span={4} key={index}>
                    <Card shadow="sm" style={{ height: "100%" }}>
                        <Text>#{index}</Text>
                        <Text>{floor.ownerName}</Text>
                        <Text>{floor.message}</Text>
                        <Text>{floor.link}</Text>
                        <Text style={{ color: floor.color }}>{floor.color}</Text>
                        <Text style={{ color: floor.windowsTint }}>{floor.windowsTint}</Text>
                    </Card>
                </Grid.Col>
           ) )}
        </Grid>
        <Button onClick = {() => setFloorCreationOpened(true)} variant='light' radius={8} disabled={!account || chainId !== Sepolia.chainId} 
            style={{position: 'fixed', bottom: 42, right: 42}}>
            Mint a new Floor
        </Button>
        <FloorCreationModel opened={floorCreationOpened} onClose={() => setFloorCreationOpened(false)}></FloorCreationModel>
        </>
    )

};
