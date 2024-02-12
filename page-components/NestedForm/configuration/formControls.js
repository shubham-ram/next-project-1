const formControls = [
    {
        name: "info",
        type: "fieldArray",
        defaultValues: {
            name: "",
            email: "",
        },
        controls: [
            {
                name: "name",
                label: "Name",
                placeholder: "Enter Name",
                type: "text",
                rules: {
                    required: true
                }
            },
            {
                name: "email",
                label: "Email",
                placeholder: "Enter email",
                type: "text",
                rules: {
                    required: true
                }
            },
            {
                name: "education",
                type: "fieldArray",
                defaultValues: {
                    schoolName: "",
                    defgree: "",
                    grade: ""
                },
                controls: [
                    {
                        name: "schoolName",
                        label: "School Name",
                        placeholder: "Enter School Name",
                        type: "text",
                        rules: {
                            required: true
                        }
                    },
                    {
                        name: "degree",
                        label: "Degree",
                        placeholder: "Enter Degree",
                        type: "text",
                        rules: {
                            required: true
                        }
                    },
                    {
                        name: "grade",
                        label: "Grades",
                        placeholder: "Enter Grade",
                        type: "number",
                        rules: {
                            required: true
                        }
                    },
                    {
                        name: "Subjects",
                        type: "fieldArray",
                        defaultValues: {
                            subject: "",
                            teacher: ""
                        },
                        controls: [
                            {
                                name: "subject",
                                label: "Subject",
                                placeholder: "Enter Subject",
                                type: "text",
                                rules: {
                                    required: true
                                }
                            },
                            {
                                name: "teacher",
                                label: "Teacher",
                                placeholder: "Enter Teacher Name",
                                type: "text",
                                rules: {
                                    required: true
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const newFormControls = [
    {
        name: "info",
        type: "fieldArray",
        defaultValues: {
            name: "",
            email: "",
        },
        controls: [
            {
                name: "name",
                label: "Name",
                placeholder: "Enter Name",
                type: "text",
                rules: {
                    required: true
                }
            },
            {
                name: "email",
                label: "Email",
                placeholder: "Enter email",
                type: "text",
                rules: {
                    required: true
                }
            },
        ]
    }
]
export { newFormControls }
export default formControls