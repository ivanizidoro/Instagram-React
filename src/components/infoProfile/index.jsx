import { AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { Flex, Typography } from "../../style";
import * as C from "./style";

export function InfoProfile() {
    return (
        <Flex direction="row" align="center" justify="space-between">
            <C.Container>
                <C.Link>
                    <C.ProfileImage
                        src="https://avatars.githubusercontent.com/u/109913632?v=4"
                        alt="img perfil github" />
                    <Typography weight="300" size="13px" height="15px">Ivan</Typography>
                </C.Link>
            </C.Container>

            <C.Container>
                <AiFillHeart color="red"/>
                <Typography weight="300" size="13px" height="15px">7849</Typography>

                <FaRegComment />
                <Typography weight="300" size="13px" height="15px">678</Typography>
            </C.Container>

        </Flex>
    );
}