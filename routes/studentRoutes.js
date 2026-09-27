const express = require("express");
const router = express.Router();
const students = require("../data/students");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All students",
    students: students
  });
});

router.get("/:id", (req, res) => {
  const student = students.find(
    (student) => student.studentId === req.params.id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

router.post("/", (req, res) => {
  const {
    studentId, name, age, gender, course, semester, city, email, marks, attendance, feesPaid, skills, isActive
  } = req.body;

  if (!studentId || !name || !age || !course) {
    return res.status(400).json({
      message: "studentId, name, age and course are required"
    });
  }

  const alreadyExists = students.find(
    (student) => student.studentId === studentId
  );

  if (alreadyExists) {
    return res.status(400).json({
      message: "Student ID already exists"
    });
  }

  const newStudent = {
    studentId, name, age, gender, course, semester, city, email, marks, attendance, feesPaid, skills, isActive
  };

  students.push(newStudent);
  res.status(201).json({
    message: "Student created successfully",
    student: newStudent
  });
});

router.put("/:id", (req, res) => {
  const student = students.find(
    (student) => student.studentId === req.params.id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const {
    name, age, gender, course, semester, city, email, marks, attendance, feesPaid, skills, isActive
  } = req.body;

  if (name !== undefined) student.name = name;
  if (age !== undefined) student.age = age;
  if (gender !== undefined) student.gender = gender;
  if (course !== undefined) student.course = course;
  if (semester !== undefined) student.semester = semester;
  if (city !== undefined) student.city = city;
  if (email !== undefined) student.email = email;
  if (marks !== undefined) student.marks = marks;
  if (attendance !== undefined) student.attendance = attendance;
  if (feesPaid !== undefined) student.feesPaid = feesPaid;
  if (skills !== undefined) student.skills = skills;
  if (isActive !== undefined) student.isActive = isActive;

  res.status(200).json({
    message: "Student updated successfully",
    student: student
  });
});

router.delete("/:id", (req, res) => {
  const studentIndex = students.findIndex(
    (student) => student.studentId === req.params.id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

module.exports = router;
