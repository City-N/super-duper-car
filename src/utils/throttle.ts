/* eslint-disable prefer-rest-params */
export function throttle(callback: (...args: unknown[]) => void, delay: number, ctx: unknown) {
    let isThrottled = false;
    let args: IArguments | null;
    let context: unknown | null;
    function wrapper() {
        if (isThrottled) {
            args = arguments;
            context = ctx;
            return;
        }
        isThrottled = true;
        callback.apply(ctx, [...arguments]);
        setTimeout(() => {
            isThrottled = false;
            if (args) {
                const [arg] = args;
                wrapper.apply(context, arg);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-multi-assign
                args = context = null;
            }
        }, delay);
    }
    return wrapper;
}
