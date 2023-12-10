import { useState } from "react";

import { Flex, Typography, Button } from "../../style";
import * as C from './style'

export function Stories() {
    const [showAll, setShowAll] = useState(false);
    const numberArray = showAll ? 20 : 8;

    function handleShowAll(){
        setShowAll(!showAll);
    }

    return (
        <Flex padding="8px 2px 8px 20px" align="start" gap="4px">
            <Typography weight="400" size="18px" height="21px">Stories</Typography>

            <Flex align="end" padding="8px 20px">
                <Button onClick={() => handleShowAll()}>
                    <Typography size="18px">
                        {showAll ? 'Ver menos' : "Ver mais"}
                    </Typography>
                </Button>

                <C.Container>
                    {
                        Array.from(Array(numberArray)).map((item, index) => (
                            <C.Profile key={index}>
                                <img src="https://avatars.githubusercontent.com/u/109913632?v=4" alt="img perfil github" />
                            </C.Profile>
                        ))
                    }

                </C.Container>
            </Flex>
        </Flex>
    );
}