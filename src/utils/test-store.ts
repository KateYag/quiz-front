//
// let testStore = {
//     quiz: null,
//     userResult: []
// };
//
// export function getTestStore() {
//     return testStore;
// }
//
//  export function setTestStore(newStore) {
//     testStore = { ...testStore, ...newStore };
// }
// Определяем типы для вашего состояния
interface Quiz {
    // Добавьте необходимые поля для интерфейса Quiz
    id: number; // Пример поля
    title?: string; // Пример поля
    // Добавьте другие поля в зависимости от вашей модели данных
}

interface UserResult {
    questionId: number;
    chosenAnswerId: number;
    userId?: number; // Если у вас есть это поле
}

// Определяем тип для тестового хранилища
interface TestStore {
    quiz?: Quiz | null;
    userResult: UserResult[];
}

// Инициализация тестового хранилища
let testStore: TestStore = {
    quiz: null,
    userResult: []
};

// Функция для получения тестового хранилища
export function getTestStore(): TestStore {
    return testStore;
}

// Функция для установки нового состояния в тестовом хранилище
export function setTestStore(newStore: Partial<TestStore>): void {
    testStore = { ...testStore, ...newStore };
}
