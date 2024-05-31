export class UpdateUserDto {
    readonly email: string
    readonly password: string
    readonly emailAuthCode: object
    readonly authcode: string
    readonly statusAuthEmail: boolean
    readonly nameCamp: string
    readonly managers: Array<string>
}