declare function resizerMouseDown(e: any): void;
declare function resizerTouchStart(e: any): void;
declare function attachResizerEvents(): void;
declare function clearResizerEvents(): void;
declare function getResizerFromDiv(divId: any): any;
declare function siblingWindowErrorCorrect(child: any): void;
declare namespace Resizable {
    export const activeContentWindows: any[];
    export const activeResizers: any[];
    export const currentResizer: any;
    export namespace Sides {
        const TOP: string;
        const BOTTOM: string;
        const LEFT: string;
        const RIGHT: string;
    }
    export namespace Classes {
        const WINDOW_TOP: string;
        const WINDOW_BOTTOM: string;
        const WINDOW_LEFT: string;
        const WINDOW_RIGHT: string;
    }
    export function initialise(parentId: any, initialSizes: any, resizerThickness: any): void;
    export function setupChildren(parentWindow: any): void;
    export { ContentWindow };
    export function parentResize(width: any, height: any): void;
    export function windowResized(): void;
    export function resizingEnded(): void;
    export function resizingStarted(): void;
    export { Resizer };
}
declare class ContentWindow {
    constructor(parent: any, width: any, height: any, div: any);
    parent: any;
    width: any;
    height: any;
    sizeFractionOfParent: number;
    divId: any;
    children: any[];
    isSplitHorizontally: boolean;
    isSplitVertically: boolean;
    childResizer: {
        parent: any;
        isHorizontal: any;
        leftWindow: any;
        rightWindow: any;
        topWindow: any;
        bottomWindow: any;
        divId: string;
        lineThickness: any;
        getDiv(): HTMLElement;
        getDivId(): string;
        reposition(): void;
        resize(e: any): void;
        delete(): void;
        cancelResize(e: any): void;
    };
    minWidth: number;
    minHeight: number;
    originalMinSize: number;
    childResizerThickness: any;
    getDiv(): HTMLElement;
    getDivId(): any;
    findChildWindowElements(): {
        child1: Element;
        child2: Element;
        isHorizontal: boolean;
    };
    resize(side: any, mousePos: any): void;
    calculateSizeFractionOfParent(): void;
    getSibling(): any;
    childrenResize(): void;
    toString(): string;
    changeSize(width: any, height: any): void;
    repositionChildResizer(): void;
    calculateMinWidthHeight(): void;
    getTopLevelParent(): {
        parent: any;
        width: any;
        height: any;
        sizeFractionOfParent: number;
        divId: any;
        children: any[];
        isSplitHorizontally: boolean;
        isSplitVertically: boolean;
        childResizer: {
            parent: any;
            isHorizontal: any;
            leftWindow: any;
            rightWindow: any;
            topWindow: any;
            bottomWindow: any;
            divId: string;
            lineThickness: any;
            getDiv(): HTMLElement;
            getDivId(): string;
            reposition(): void;
            resize(e: any): void;
            delete(): void;
            cancelResize(e: any): void;
        };
        minWidth: number;
        minHeight: number;
        originalMinSize: number;
        childResizerThickness: any;
        getDiv(): HTMLElement;
        getDivId(): any;
        findChildWindowElements(): {
            child1: Element;
            child2: Element;
            isHorizontal: boolean;
        };
        resize(side: any, mousePos: any): void;
        calculateSizeFractionOfParent(): void;
        getSibling(): any;
        childrenResize(): void;
        toString(): string;
        changeSize(width: any, height: any): void;
        repositionChildResizer(): void;
        calculateMinWidthHeight(): void;
        getTopLevelParent(): any;
        splitHorizontally(leftWindowSizeFraction: any, leftDiv: any, rightDiv: any): void;
        splitVertically(topWindowSizeFraction: any, topDiv: any, bottomDiv: any): void;
    };
    splitHorizontally(leftWindowSizeFraction: any, leftDiv: any, rightDiv: any): void;
    splitVertically(topWindowSizeFraction: any, topDiv: any, bottomDiv: any): void;
}
declare class Resizer {
    constructor(parent: any, window1: any, window2: any, isHorizontal: any);
    parent: any;
    isHorizontal: any;
    leftWindow: any;
    rightWindow: any;
    topWindow: any;
    bottomWindow: any;
    divId: string;
    lineThickness: any;
    getDiv(): HTMLElement;
    getDivId(): string;
    reposition(): void;
    resize(e: any): void;
    delete(): void;
    cancelResize(e: any): void;
}
