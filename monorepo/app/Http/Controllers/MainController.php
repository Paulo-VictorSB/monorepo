<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Filme;
use Carbon\Carbon;
use Illuminate\Support\Str;

class MainController extends Controller
{
    public function home()
    {
        $filmes = Filme::all();

        return Inertia::render('Views/Home', ['filmes' => $filmes]);
    }

    public function guardar_filme(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'status' => 'required|in:pendente,concluido',
            'imagem' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $nomeArquivo = Str::slug($validated['nome']) . '.' . $request->file('imagem')->getClientOriginalExtension();

        $destino = public_path('assets/images');

        $request->file('imagem')->move($destino, $nomeArquivo);

        $urlImagem = 'assets/images/' . $nomeArquivo;

        Filme::create([
            'nome' => $validated['nome'],
            'url_imagem' => $urlImagem,
            'status' => $validated['status'],
            'assistido_em' => $validated['status'] === 'concluido' ? now() : null,
        ]);

        return redirect()->route('home');
    }

    public function marcar_assistido(Request $request)
    {
        $id = $request->input('id');

        $filme = Filme::find($id);

        $filme->update([
            'status' => 'concluido',
            'assistido_em' => Carbon::now(),
        ]);

        $filme->save();

        return redirect()->route('home');
    }

    public function assistidos()
    {
        $filmes = Filme::where('status', 'concluido')->get();

        return Inertia::render('Views/Assistidos', ['filmes' => $filmes]);
    }

    public function pendentes()
    {
        $filmes = Filme::where('status', 'pendente')->get();

        return Inertia::render('Views/Assistidos', ['filmes' => $filmes]);
    }
}
