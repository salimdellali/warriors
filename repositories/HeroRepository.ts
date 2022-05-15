import { BaseRepository } from './base/BaseRepository';
import { Hero } from '../entities/Hero';

export class HeroRepository extends BaseRepository<Hero> {
	countOfHeroes(): Promise<number> {
		return this._collection.count({});
	}
}
