package com.example.fsd.patterns.mvc;

/**
 * A simple MVC pattern for a student database.
 */
// Model
class Student {
    private String name;
    private int id;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}

// View
class StudentView {
    public void printStudentDetails(String studentName, int studentId) {
        System.out.println("Student: ");
        System.out.println("Name: " + studentName);
        System.out.println("ID: " + studentId);
    }
}

// Controller
class StudentController {
    private Student model;
    private StudentView view;

    public StudentController(Student model, StudentView view) {
        this.model = model;
        this.view = view;
    }

    public void updateView() {
        view.printStudentDetails(model.getName(), model.getId());
    }
}

public class MVCPattern {
    public static void main(String[] args) {
        Student model = new Student("John Doe", 1);
        StudentView view = new StudentView();
        StudentController controller = new StudentController(model, view);

        controller.updateView();
    }
}
