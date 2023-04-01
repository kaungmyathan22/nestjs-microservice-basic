import { UnauthorizedException } from "@nestjs/common";

export const authContext = ({ req }) => {
    if (req.headers?.authorization) {
        return {
            user: {
                id: "12"
            }
        }
    }
    throw new UnauthorizedException();
}