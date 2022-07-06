module.exports = {
    plugins: [
        require("autoprefixer"),
        require("cssnano")({
            preset: "default",
        }),
        require("postcss-url")({
            url: "inline"
        }),
    ],
};