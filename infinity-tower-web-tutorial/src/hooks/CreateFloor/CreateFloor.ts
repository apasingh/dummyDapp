import { useContractFunction } from "@usedapp/core"
import { contract } from "..";

export const useCreateFloor = () => {
    const { state, send } = useContractFunction(contract, "createFloor");
    const loading = state.status === "PendingSignature" || state.status === "Mining"; //we show users its loading in these cases
    const success = state.status === "Success";
    const error = state.status === "Fail" || state.status === "Exception";

    return{
        loading, success, error, send
    }

}

//gives users the status of their interaction with the contract, we must put this into FloorCreationModel