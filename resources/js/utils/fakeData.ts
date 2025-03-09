const fakeData = {
    head: [
        {
            title: "Name",
            isSortable: true,
        },
        {
            title: "Age",
            isSortable: true,
        },
        {
            title: "Address",
            isSortable: true,
        },
    ],
    data: [
        {
            name: "Jane Smith",
            age: 25,
            address: {
                street: "123 Main St",
                city: "New York",
                state: "NY",
            },
        },
        {
            name: "John Doe",
            age: 30,
            address: {
                street: "123 Main St",
                city: "New York",
                state: "NY",
            },
        },
        {
            name: "Abraham Smith",
            age: 25,
            address: {
                street: "154 Main St",
                city: "New Jersey City",
                state: "Jersey",
            },
        },
        //... more records...
    ],
};

export {fakeData};