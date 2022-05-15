import { MongoClient } from 'mongodb';

import { SpartanRepository } from './repositories/SpartanRepository';
import { Spartan } from './entities/Startan';

import { HeroRepository } from './repositories/HeroRepository';
import { Hero } from './entities/Hero';

async function main() {
	const mongoClient: MongoClient = await MongoClient.connect(
		'mongodb://localhost:27017'
	);
	const mongodb = mongoClient.db('warriors');

	const spartanEntity = new Spartan('Leonidas', 1020);
	const spartanRepository = new SpartanRepository(mongodb, 'spartans');
	const result = await spartanRepository.create(spartanEntity);
	console.log('Spartan inserted? ', result);
	const countSpartans = await spartanRepository.countOfSpartans();
	console.log('Count of spartans:', countSpartans);

	const heroEntity = new Hero('Spiderman', 23);
	const heroRepository = new HeroRepository(mongodb, 'heroes');
	const result2 = await heroRepository.create(heroEntity);
	console.log('Hero inserted? ', result2);
	const countHeroes = await heroRepository.countOfHeroes();
	console.log('Count of heroes: ', countHeroes);

	process.exit(0);
}

main();
