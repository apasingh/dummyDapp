import { Modal } from "@mantine/core";

export type FloorCreationModelProps = {
    opened: boolean;
    onClose: () => void;
}

export const FloorCreationModel = ({opened, onClose}:FloorCreationModelProps) => {
    return(
     <Modal opened={opened} onClose={onClose} title="Create a new floor">
        FORM
    </Modal>
    );
}; 