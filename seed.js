const db = require("./db");
const { Campus, Student } = require("./db/models");

const seedCampuses = [
    { name: "Baruch College", imageUrl: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/colleges/layout/entry-15-baruch_at_night-768x402.jpg", address: "55 Lexington Avenue, New York, NY 10010", description: "Popular Majors: Finance, Accounting, Marketing"}, 
    { name: "Brooklyn College", imageUrl: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/schools/brooklyn-college/brc_aerial_0605_hor-768x402.jpg", address: "2900 Bedford Ave, Brooklyn, NY 11210", description: "Popular Majors: Business, Psychology, Accounting"}
]; 

const seedStudents = [
    { firstName: "Kevin", lastName: "Liu", email: "liukevin209@gmail.com", imageUrl:"123.jpg", gpa: "3.6", campusId: 2}, 
    { firstName: "Andy", lastName: "Chen", email: "ChenAndy209@gmail.com", imageUrl:"456.jpg", gpa: "3.7", campusId: 1}
]

const seed = async () => {
    await db.sync(); 
    await Campus.bulkCreate(seedCampuses);
    await Student.bulkCreate(seedStudents);
};
  
seed().then(() => process.exit());