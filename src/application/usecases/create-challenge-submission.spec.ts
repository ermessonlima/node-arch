import { CreateChallengeSubmission } from "./create-challenge-submission";
import { inMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { inMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenge-repository";
import { Student } from "../../domain/entities/student";
import { Challenge } from "../../domain/entities/challenge";

describe('Create challenge submission use case', () => {
    it('should create a challenge submission', async  () => {
        const studentsRepository = new inMemoryStudentsRepository();
        const challengeRepository = new inMemoryChallengesRepository();

        const student = Student.create({
            name: 'Ermesson Lima',
            email: 'ermessonlimaossantos@hotmail.com'
        });

        const challenge = Challenge.create({
            title: 'Test challenge',
            instructionUrl: 'http://www.example.com',
        });

        studentsRepository.items.push(student);
        challengeRepository.items.push(challenge);

    const sut = new CreateChallengeSubmission(
        studentsRepository,
        challengeRepository
    );
    const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
    });
    expect(response).toBeTruthy();
    });
});