export const addTopic = (topics, name) => [
    ...topics,
    { id: crypto.randomUUID(), name: name.trim(), completed: false },
];

export const profileSummary = ({ name, role, city }) =>
    `${name} estudia ${role} desde ${city}.`;
