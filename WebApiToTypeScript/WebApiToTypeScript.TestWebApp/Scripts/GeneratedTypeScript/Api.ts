module Api {
    export class NewTestApiService {

        get = (a: boolean, b: number, c: string, d: number, e: number, f: any, g: number, h: number, i: number, j: number, k: number, l: number, m: number) : Promise<Date> => {
            return new Promise<Date>((resolve) => resolve($.get('/api/testapi/Get', {a, b, c, d, e, f, g, h, i, j, k, l, m})));
        }
    }
}
module Api {
    export class TestApiService {

        get1 = () : Promise<string> => {
            return new Promise<string>((resolve) => resolve($.get('/api/testapi/Get1', {})));
        }
        get2 = (i: number, s: string) : Promise<number> => {
            return new Promise<number>((resolve) => resolve($.get('/api/testapi/Get2', {i, s})));
        }
    }
}
