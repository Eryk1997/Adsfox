<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CanalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $arrayName = array('Facebook', 'Instagram', 'LinkedIn');
        foreach ($arrayName as $name) {
            DB::table('canals')->insert([
                'name' => $name,
                'number' => rand(1, 8)
            ]);
        }
    }
}
