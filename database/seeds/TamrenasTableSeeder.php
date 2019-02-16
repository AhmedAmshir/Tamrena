<?php

use Illuminate\Database\Seeder;

class TamrenasTableSeeder extends Seeder
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
            App\Tamrena::create([
                'name' => $faker->title,
                'stars' => rand(10, 50),
                'description' => $faker->text,
                'user_id' => rand(1,5),
                'category_id' => rand(1,4)
            ]);
        }
    }
}
