<?php

namespace App\Http\Controllers;

use App\Http\Requests\CanalPostRequest;
use App\Http\Requests\CanalPutRequest;
use App\Models\Canal;

class CanalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        // the method return all canals in the database
        return Canal::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CanalPostRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CanalPostRequest $request)
    {
        // create new canals, get request and push to the databaase
        return Canal::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|object
     */
    public function show($id)
    {
        // return informations about 1 canal
        //find canal in the database
        $canal = Canal::whereId($id)->get();

        // if not found return error
        if ($canal->isEmpty()) {
            return response()->json(['errors' => ['message' => 'Not found Canal with id: ' . $id]])->setStatusCode(500);
        }

        return $canal;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|object
     */
    public function update(CanalPutRequest $request, $id)
    {
        // update the canal
        // find canal in the databse
        $canal = Canal::find($id);

        // if not found canal return error message
        if (!$canal) {
            return response()->json(['errors' => ['message' => 'Not found Canal with id: ' . $id]])->setStatusCode(500);
        }

        return $canal->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|int|object
     */
    public function destroy($id)
    {
        //
        if (!Canal::find($id)) {
            return response()->json(['errors' => ['message' => 'Not found Canal with id: ' . $id]])->setStatusCode(500);
        }
        return Canal::destroy($id);
    }

    public function percentage()
    {
        // find all canals, empty array and sum from columns of name number
        $canals = Canal::all();
        $newCanalsInfo = array();
        $sumOfAllChannels = Canal::sum('number');

        //create foreach and push to empty array new values about canals

        foreach ($canals as $canal) {
            $newCanalsInfo[] = [
                'id' => $canal->id,
                'value' => round(($canal->number / $sumOfAllChannels) * 100, 2)
            ];
        }

        return $newCanalsInfo;
    }
}
