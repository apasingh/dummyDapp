import { ColorInput, Modal, TextInput, Group, Button, Space, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormEvent, useEffect } from "react";
import { useCreateFloor } from "../../../hooks/CreateFloor";
import { StrToHexColor } from "../../../utils/ColorUtils";

export type FloorCreationModelProps = {
    opened: boolean;
    onClose: () => void;
}

export const FloorCreationModel = ({opened, onClose}:FloorCreationModelProps) => {

    const form = useForm({
        initialValues: {
            ownerName: "",
            message: "",
            link: "",
            color: "#b07c5e", //putting in default colors, this step not required
            windowsTint: "#b9eaed",
        }
    });


    //using hook from CreateFloor.ts
    const {loading, success, error, send} = useCreateFloor();

    //add useeffect on success state and if its a success, we want to close the model
    useEffect(() => {
        if (success) {
            onClose();
        }
    }, [success]);
    // 
    const handleSubmit = async (values: typeof form.values, event: FormEvent<HTMLFormElement> | undefined) => {
        event?.preventDefault(); // Prevent default form submission behavior
        console.log(values);
        await send(values.ownerName, values.message, values.link, StrToHexColor(values.color), StrToHexColor(values.windowsTint));
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Create a new floor">
            <form onSubmit={form.onSubmit(handleSubmit)}>
            {/* <form onSubmit={(event) => handleSubmit(form.values, event)}> */}
                <TextInput required label="Owner name" placeholder="Satoshi Nakamoto" {...form.getInputProps("ownerName")} />
                <TextInput label="Message" placeholder="Hello World" {...form.getInputProps("message")} />
                <TextInput label="Link" placeholder="https://usedapp-docs.netlify.app/docs" {...form.getInputProps("link")} />
                <ColorInput required label="Color" {...form.getInputProps("color")} />
                <ColorInput required label="Windows Tint" {...form.getInputProps("windowsTint")} />

                {
                    !!error && (
                        <>
                        <Space h="md"></Space>
                        <Text style={{ color: 'red' }}> An error occurred... </Text>
                        </>
                    )
                }    
                <Group style={{ justifyContent: 'right' }}> 
                    <Button type="submit" loading={loading}> Submit to Mint </Button>
                </Group>
            </form>
        </Modal>
    );
};