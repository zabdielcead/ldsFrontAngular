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



export interface ReqFindUser {
    idUsuario: string;
    email:     string;
}


export interface ResFindUser {
    activo:    boolean;
    _id:       string;
    cargo:     string;
    email:     string;
    idPerfil:  string;
    idUsuario: string;
    nombre:    string;
    pass:      string;
    telCasa:   string;
    telCel:    string;
}

export interface CookieUser {
    activo:    boolean;
    cargo:     string;
    email:     string;
    idPerfil:  string;
    idUsuario: string;
    nombre:    string;
    telCasa:   string;
    telCel:    string;
    jwt:       string;
}