export default interface IRepository<T,S>{
    getById(id: S): Promise<T>;
    getAll(): Promise<T[]>;
    delete(id: S): Promise<void>;
    count(): Promise<number>;
}