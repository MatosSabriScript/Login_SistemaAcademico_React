package br.com.senai.projeto.controller;


import br.com.senai.projeto.model.Aluno;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController

@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AlunoController {
    @GetMapping("/alunos")
    public List<Aluno> listarAlunos() {
        List<Aluno> alunos = new ArrayList<>();
        alunos.add(new Aluno(1001, "Ana Beatriz", "Desenvolvimento de Sistemas"));
        alunos.add(new Aluno(1002, "Carlos José", "Redes de Computadores"));
        alunos.add(new Aluno(1003, "Mariana Silva", "Eletrotécnica"));
        alunos.add(new Aluno(1004, "Pedro Henrique", "Automação Industrial"));
        return alunos;
    }
}