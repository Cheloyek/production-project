
export type BuildMode = 'production' | 'development'
export interface BuildPath {
    entry: string // путь до entry point
    build: string // путь до build
    html: string // путь до html
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPath
    isDev: boolean
}