export class Translate {
    private readonly locale: string

    constructor(locale: string) {
        this.locale = locale
    }

    public t(string: string) {
        if (this.locale === "pt-br") {
            switch (string) {

                default: return string
            }
        } else return string
    }
}