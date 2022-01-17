export interface ReqLoginDto {
    idUsuario: string;
    email:     string;
    pass:      string;
}

export interface ResLoginDto {
    email:     string;
    jwt:       string;
    idUsuario: string;
}
