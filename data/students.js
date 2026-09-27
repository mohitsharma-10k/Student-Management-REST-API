const students = [
  {
    studentId: "STU001", name: "Mohit Sharma", age: 21, gender: "Male", course: "Btech CSE", semester: 4, city: "Delhi", email: "mohitsharma.10kk@gmail.com", 
    marks: {
      math: 88,
      dbms: 76,
      web: 92
    },
    attendance: 91, feesPaid: true, 
    skills: [
      "JavaScript",
      "MongoDB",
      "React"
    ], 
    isActive: true
  },
  {
    studentId: "STU002", name: "Mohit Sharma", age: 21, gender: "Male", course: "Btech CSE", semester: 2, city: "Gurgaon", email: "mohitsharma.10kk@gmail.com",
    marks: {
      math: 95,
      dbms: 89,
      web: 94
    },
    attendance: 96, feesPaid: true,
    skills: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    isActive: true
  },
  {
    studentId: "STU003", name: "Mohit Sharma", age: 21, gender: "Male", course: "Btech CSE", semester: 4, city: "Noida", email: "mohitsharma.10kk@gmail.com",
    marks: {
      math: 72,
      dbms: 68,
      web: 81
    },
    attendance: 78, feesPaid: false,
    skills: [
      "Python",
      "SQL"
    ],
    isActive: true
  }
];

module.exports = students;
