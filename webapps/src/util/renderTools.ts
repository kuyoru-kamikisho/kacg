import {getCurrentInstance} from "vue";
import type {ComponentObjectPropsOptions} from "vue";

export function defineRenter(fn: { (): any }) {
    let vm = getCurrentInstance();

    if (!vm) {
        throw new Error(`[Kamikisho] defineRender must be called from inside a setup function`)
    }

    // @ts-ignore
    vm.render = fn
}

export function makeProp<T extends string>(name: T, type?: any, defaultValue?: any, required?: boolean): { [key in T]: any } {
    const p = {} as any
    p[name] = {}
    p[name]['type'] = type ?? String
    p[name]['default'] = defaultValue
    p[name]['required'] = required ?? false
    return p
}

export function makePropTag() {
    return makeProp('tag', String, 'div')
}

export function makePropWidth() {
    return makeProp('width', [String, Number])
}

export function makePropHeight() {
    return makeProp('height', [String, Number])
}

export function makePropMinWidth() {
    return makeProp('minWidth', [String, Number])
}

export function makePropMinHeight() {
    return makeProp('minHeight', [String, Number])
}

export function makePropMaxWidth() {
    return makeProp('maxWidth', [String, Number])
}

export function makePropMaxHeight() {
    return makeProp('maxHeight', [String, Number])
}

export function makePropColor() {
    return makeProp('color', String)
}

export function makePropElevation() {
    return makeProp('elevation', [String, Number])
}

export function makePropRounded() {
    return makeProp('rounded', [String, Number, Boolean])
}
