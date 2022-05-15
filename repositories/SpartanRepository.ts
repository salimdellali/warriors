import { BaseRepository } from './base/BaseRepository';
import { Spartan } from '../entities/Startan';

export class SpartanRepository extends BaseRepository<Spartan> {
	countOfSpartans(): Promise<number> {
		return this._collection.count({});
	}
}
