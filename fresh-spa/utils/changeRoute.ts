export function changeRoute(path: string) {
    window.location.hash = path;
    // all components rerender
    window.dispatchEvent(new Event("hashchange"));
}