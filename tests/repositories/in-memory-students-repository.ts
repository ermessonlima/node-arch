import { StudentsRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

export class inMemoryStudentsRepository implements StudentsRepository {
    public items: Student[] = [];

    async findById(id: string): Promise<Student | null> {
       const student =  this.items.find(item => item.id === id);

       if(!student) {
           return null;
       }

         return student;
    }
}