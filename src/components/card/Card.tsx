import {CardContainer} from "./CardContainer.styled";
import {Image} from "../Image.styled";
import {Head} from "../Head.styled";
import {Description} from "../Description.styled";
import {ButtonsContainer} from "../buttons/ButtonsContainer.styled";
import {Button} from "../buttons/Button.styled";

export const Card = () => {
    return (
        <CardContainer>
            <Image/>
            <Head>Headline</Head>
            <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
            <ButtonsContainer>
                <Button btnType="primary">See more</Button>
                <Button btnType="secondary">Save</Button>
            </ButtonsContainer>
        </CardContainer>
    )
}