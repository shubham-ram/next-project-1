const controls = [
    {
        name :"hour",
        label:"Hour",
        placeholder: "Enter Hour",
        type:"text",
    },
    {
        name :"minute",
        label:"minute",
        placeholder: "Enter Minute",
        type:"text",
        rules: {
            max: {
                value: 59,
                message: "Maximum value is 59"
            }
        }
    },
    {
        name :"second",
        label:"Second",
        placeholder: "Enter Seconds",
        type:"text",
        rules: {
            max: {
                value: 59,
                message: "Maximum value is 59"
            }
        }
    }
]

export default controls;