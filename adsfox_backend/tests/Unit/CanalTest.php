<?php

namespace Tests\Unit;

use Tests\TestCase;

class CanalTest extends TestCase
{

    // test to add new canal result fatal
    public function test_create_canal_fatal()
    {
        $data = ["name" => "SnapChat", "number" => 0];

        $respone = $this->call('POST', '/canals', $data);

        $respone->assertStatus($respone->status(), 422);
    }

    // test to add new canal result true
    public function test_create_canal_correct()
    {
        $data = ["name" => "SnapChat", "number" => 2];

        $respone = $this->call('POST', '/canals', $data);

        $respone->assertStatus($respone->status(), 200);
    }

    public function test_get_all_canals_correct()
    {
        $response = $this->call('GET', '/canals');

        $response->assertStatus($response->status(), 200);
    }
}
