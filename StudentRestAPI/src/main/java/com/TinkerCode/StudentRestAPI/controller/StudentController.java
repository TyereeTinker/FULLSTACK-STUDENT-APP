package com.TinkerCode.StudentRestAPI.controller;

import com.TinkerCode.StudentRestAPI.model.Student;
import com.TinkerCode.StudentRestAPI.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentRepo studentRepo;

    @PostMapping("/add")
    public String add (@RequestBody Student student){
        studentRepo.save(student);
        return "New Student Added";
    }

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentRepo.findAll();
    }

    @GetMapping("/getID/{id}")
    public Optional<Student> getStudent(@PathVariable("id") int ID){
        return studentRepo.findById(ID);
    }

    @DeleteMapping("/delete/{id}")
    public String remove(@PathVariable("id") int ID){
        studentRepo.deleteById(ID);
        return "Student removed";
    }
}
