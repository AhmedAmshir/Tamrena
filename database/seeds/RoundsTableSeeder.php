<?php

use Illuminate\Database\Seeder;

class RoundsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 4; $i++) {
            App\Round::create([
                'name' => $faker->title,
                'reps' => rand(8, 15),
                'rest' => rand(20, 120),
                'tamrena_id' => rand(1,4),
            ]);
        }
    }
}
