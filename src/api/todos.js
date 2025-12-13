export const fetchTodos = async () => {
    const res = await fetch("http://localhost:3001/todos");

    if (!res.ok) {
        throw new Error("Failed to fetch todos");
    }

    return res.json();
};