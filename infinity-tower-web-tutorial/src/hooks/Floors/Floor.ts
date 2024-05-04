import { useLogs } from "@usedapp/core"
import { contract } from ".."
import { HexToStrColor } from "../../utils/ColorUtils";
import { useMemo } from 'react';

export type FloorItem ={
    ownerName: string;
    message: string;
    link: string;
    color: string;
    windowsTint: string;
}

export const useFloors = () => {
    const logs = useLogs({
        contract,
        event: "NewFloor",
        args: [null],
    });

    const floors = useMemo(() =>{
        return (logs?.value?.map((Log) => {
            const floor: FloorItem = {
                ownerName: Log.data.ownerName,
                message: Log.data.message,
                link: Log.data.link,
                color: HexToStrColor(Log.data.color._hex),
                windowsTint: HexToStrColor(Log.data.windowsTint._hex),
            }
            return floor;
        }) || [] );
    }, [logs?.value]);

    return {
        floors,
    };
};

//will get floors once they are deployed