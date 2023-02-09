// type reloadUserInfo = {
//     localId: string
// }


// type user = {
//     accessToken: string
//     reloadUserInfo: reloadUserInfo
// }

export interface IUser  {
    reloadUserInfo: {
        localId: string
    },
    accessToken: string,
    localId: string
} 