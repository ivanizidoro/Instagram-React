import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";

export function Publications() {
    return (
        <C.Container>
            <Typography>Publicações</Typography>

            <C.ContainerPublications>
                {
                    Array.from(Array(20)).map((item, index) => (
                        <C.Content>
                        <C.PublicationsImg
                            img src="https://avatars.githubusercontent.com/u/109913632?v=4" alt="img perfil github"
                        />
                        <InfoProfile />
                    </C.Content>
                    ))
                }
                
            </C.ContainerPublications>
        </C.Container>
    );
}