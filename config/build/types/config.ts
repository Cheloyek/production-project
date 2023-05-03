export type BuildMode = 'production' | 'development'
export interface BuildPath {
    entry: string // путь до entry point
    build: string // путь до build
    html: string // путь до html
    src: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPath
    isDev: boolean
    port: number
}
