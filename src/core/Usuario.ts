export default class Usuario {
    #id?: string
    #nome: string
    #idade: number
    #token: string

    constructor(nome: string, idade: number, token: string, id?: string) {
        this.#nome = nome
        this.#idade = idade
        this.#token = token
        this.#id = id
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get idade() {
        return this.#idade
    }
    get token() {
        return this.#token
    }
}
