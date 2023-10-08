import {CardContainer} from "./components/card/CardContainer.styled";
import {Image} from "./components/card/Image.styled";
import {Head} from "./components/card/Head.styled";
import {Text} from "./components/card/Text.styled";
import {ButtonContainer} from "./components/card/ButtonContainer.styled";
import {Btn} from "./components/card/Btn.styled";

export const Card = () => {
    return (
        <CardContainer>
            <Image/>
            <Head>Headline</Head>
            <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
            <ButtonContainer>
                <Btn btnType="primary">See more</Btn>
                <Btn btnType="secondary">Save</Btn>
            </ButtonContainer>
        </CardContainer>
    )
}