let todos = []; // Временное хранилище задач
let idCounter = 1;

// Получить все задачи
exports.getAllTodos = (req, res) => {
    res.status(200).json(todos);
};

// Создать новую задачу
exports.createTodo = (req, res) => {
    const { title, description } = req.body;
    const newTodo = {
        id: idCounter++,
        title,
        description,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// Получить задачу по ID
exports.getTodoById = (req, res) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === parseInt(id));
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: 'Задача не найдена' });
    }
};

// Обновить задачу по ID
exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = todos.find(t => t.id === parseInt(id));
    if (todo) {
        todo.title = title !== undefined ? title : todo.title;
        todo.description = description !== undefined ? description : todo.description;
        todo.completed = completed !== undefined ? completed : todo.completed;
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: 'Задача не найдена' });
    }
};

// Удалить задачу по ID
exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Задача не найдена' });
    }
};
