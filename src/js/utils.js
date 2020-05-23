module.exports.base = {
    CLOSE: document.querySelector(".close__btn"),
    MINIMIZE: document.querySelector(".minimize__btn"),
    TIMER_SETTING: document.querySelector(".timer__btn"),
    TIMER_SETTING_AREA: document.querySelector(".timer-setting__area"),
    RESET: document.querySelector(".reset__btn"),
    SAVE: document.querySelector(".save__btn"),
    TIMER_SETTING_BOX: document.querySelectorAll(".timer-setting__box"),
    CLOCK_MINUTES: document.querySelector(".clock__minutes"),
    CLOCK_SECONDS: document.querySelector(".clock__seconds"),
    CLOCK_PLAY: document.querySelector(".clock__play"),
    CLOCK_PAUSE: document.querySelector(".clock__pause"),
    CLOCK_STOP: document.querySelector(".clock__stop"),
    RANGE_SLIDER: document.querySelectorAll(".range-slider__range"),
    ALERT_BOX: document.querySelector(".alert__box"),
    NEXTROUND_NO: document.querySelector(".nextround_no"),
    NEXTROUND_YES: document.querySelector(".nextround_yes"),
};

module.exports.ConstantValue = {
    USER_STORAGE_KEY: "USERSETTINGS",
    DEFAULT_STORAGE_KEY: "DEFAULTSETTINGS",
}

module.exports.debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}


