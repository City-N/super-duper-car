export function throttle(callback: (args?: unknown) => void, wait: number, context = this) {
    // Ваш код здесь
    let isThrottled = false;
    let savedArgs: IArguments;
    let savedThis;

    function wrapper() {
        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        callback.apply(context, arguments); // (1)

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, wait);
    }

    return wrapper;
}
