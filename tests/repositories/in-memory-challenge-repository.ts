import { ChallengesRepository } from "../../src/application/repositories/challengesRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class inMemoryChallengesRepository implements ChallengesRepository {
    public items: Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
       const challenge =  this.items.find(item => item.id === id);

       if(!challenge) {
           return null;
       }

         return challenge;
    }
}