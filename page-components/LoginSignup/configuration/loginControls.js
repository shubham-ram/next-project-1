const signUpControls = [
    {
        name:"name",
        label:"Name",
        placeholder:"Enter Name",
        type:"text",
        rules: {
            required: true
        }
    },
    {
        name:"email",
        label:"Email",
        placeholder:"Enter Email",
        type:"text",
        rules: {
            required: true,
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:"Please enter a valid email address"
            }
        }
    },
    {
        name:"password",
        label:"Password",
        placeholder:"Enter Password",
        type:"password",
        rules: {
            required: true
        }
    },
    {
        name:"confirm_password",
        label:"Confirm Password",
        placeholder:"Re enter password",
        type:"text",
        rules: {
            required: true
        }
    }
]

const loginControls = [
    {
        name:"loginEmail",
        label:"Email",
        placeholder:"Enter Email",
        type:"text",
         rules: {
            required: true,
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:"Please enter a valid email address"
            }
        }
    },
    {
        name:"loginPassword",
        label:"Password",
        placeholder:"Enter Password",
        type:"password",
        rules: {
            required: true
        }
    },
]

export {signUpControls, loginControls};