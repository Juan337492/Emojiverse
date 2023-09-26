import { User } from "@clerk/nextjs/dist/types/api"

export const filterUserForClient =(user: User) => {
    return {
     id: user.id, 
     username: user.username, 
     profileImageUrl: user.imageUrl,
     externalUsername: user.externalAccounts.find((externalAccount) => externalAccount.provider === "oauth_github")?.username ?? null
    };
 };
 