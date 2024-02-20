export function getQueryParams(params: OptionalRecord<string, string>) {
    const seacrhParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            seacrhParams.set(name, value);
        }
    });
    return `?${seacrhParams.toString()}`;
}

/**
 * Функция добывления параметров строки запроса в URL
 * @param params
 */

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
