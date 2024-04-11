package com.TinkerCode.StudentRestAPI.repository;

import com.TinkerCode.StudentRestAPI.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
}
