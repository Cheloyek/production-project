declare module '*.scss' {
    interface IClassNames {
        [classNane: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}